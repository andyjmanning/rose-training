/* Project Rose training — course + assessment engine.
   Plain vanilla JavaScript. Course text lives in CONTENT.md; assessment questions
   live in bank.json (answers stored as SHA-256 digests — a deterrent, not security);
   site settings live in config.js. Nothing course-specific should need editing here. */

(function () {
  "use strict";

  var CFG = window.ROSE_CONFIG || {};
  var STORE_KEY = "roseTrainingV1";
  var SALT = "rose-assessment-v1";
  var appEl = document.getElementById("app");
  var course = null;   // { intro, modules[], refcard }
  var bank = null;     // bank.json contents
  var exam = null;     // in-memory state of the current attempt (not persisted)

  /* ---------- state (localStorage) ---------- */

  function loadState() {
    try {
      var s = JSON.parse(localStorage.getItem(STORE_KEY)) || {};
      s.done = s.done || {};
      s.checks = s.checks || {};
      s.candidate = s.candidate || null;
      s.attempts = s.attempts || [];
      s.retakeBlock = s.retakeBlock || [];
      return s;
    } catch (e) {
      return { done: {}, checks: {}, candidate: null, attempts: [], retakeBlock: [] };
    }
  }
  function saveState(state) {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(state)); } catch (e) { /* progress not saved */ }
  }
  var state = loadState();

  /* ---------- utilities ---------- */

  function escapeHtml(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  function inline(s) {
    var out = escapeHtml(s);
    // images link to themselves so they can be opened full-size and zoomed on a phone
    out = out.replace(/!\[([^\]]*)\]\(([^)\s]+)\)/g,
      '<a href="$2" target="_blank" rel="noopener"><img src="$2" alt="$1" loading="lazy"></a>');
    out = out.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
    out = out.replace(/\*([^*]+)\*/g, "<em>$1</em>");
    return out;
  }

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function sha256hex(str) {
    var data = new TextEncoder().encode(str);
    return crypto.subtle.digest("SHA-256", data).then(function (buf) {
      return Array.prototype.map.call(new Uint8Array(buf), function (b) {
        return b.toString(16).padStart(2, "0");
      }).join("");
    });
  }

  function makeRef() {
    var d = new Date();
    var ymd = d.getFullYear() + String(d.getMonth() + 1).padStart(2, "0") + String(d.getDate()).padStart(2, "0");
    var alphabet = "ABCDEFGHJKMNPQRSTVWXYZ23456789";
    var rand = crypto.getRandomValues(new Uint8Array(4));
    var suffix = "";
    for (var i = 0; i < 4; i++) suffix += alphabet[rand[i] % alphabet.length];
    return "ROSE-" + ymd + "-" + suffix;
  }

  function todayISO() {
    var d = new Date();
    return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
  }

  /* ---------- markdown parsing ---------- */

  function parseCheck(lines) {
    var check = { q: "", type: "single", options: [] };
    lines.forEach(function (line) {
      var t = line.trim();
      if (t.indexOf("q:") === 0) check.q = t.slice(2).trim();
      else if (t.indexOf("type:") === 0) check.type = t.slice(5).trim();
      else if (/^- \[[ xX]\]/.test(t)) {
        var correct = /^- \[[xX]\]/.test(t);
        var body = t.replace(/^- \[[ xX]\]\s*/, "");
        var parts = body.split("::");
        check.options.push({ text: parts[0].trim(), why: (parts[1] || "").trim(), correct: correct });
      }
    });
    return check;
  }

  function renderBlocks(lines, checks) {
    var html = [];
    var i = 0;
    var listType = null;

    function closeList() {
      if (listType) { html.push(listType === "ul" ? "</ul>" : "</ol>"); listType = null; }
    }

    while (i < lines.length) {
      var line = lines[i];
      var t = line.trim();

      if (t.indexOf("```check") === 0) {
        closeList();
        var buf = [];
        i++;
        while (i < lines.length && lines[i].trim().indexOf("```") !== 0) { buf.push(lines[i]); i++; }
        i++;
        if (checks) checks.push(parseCheck(buf));
        continue;
      }

      if (t === "") { closeList(); i++; continue; }

      if (t.indexOf("### ") === 0) {
        closeList();
        html.push("<h3>" + inline(t.slice(4)) + "</h3>");
      } else if (t.indexOf("# ") === 0) {
        closeList();
        html.push("<h1>" + inline(t.slice(2)) + "</h1>");
      } else if (t.indexOf("!! ") === 0) {
        closeList();
        html.push('<div class="warn-card"><p>' + inline(t.slice(3)) + "</p></div>");
      } else if (t.indexOf("> ") === 0) {
        closeList();
        var noteLines = [t.slice(2)];
        while (i + 1 < lines.length && lines[i + 1].trim().indexOf("> ") === 0) {
          i++; noteLines.push(lines[i].trim().slice(2));
        }
        html.push('<div class="note-card"><p>' + noteLines.map(inline).join("</p><p>") + "</p></div>");
      } else if (t.indexOf("- ") === 0) {
        if (listType !== "ul") { closeList(); html.push("<ul>"); listType = "ul"; }
        html.push("<li>" + inline(t.slice(2)) + "</li>");
      } else if (/^\d+\.\s/.test(t)) {
        var num = parseInt(t, 10);
        if (listType !== "ol") { closeList(); html.push('<ol start="' + num + '">'); listType = "ol"; }
        html.push("<li>" + inline(t.replace(/^\d+\.\s/, "")) + "</li>");
      } else {
        closeList();
        html.push("<p>" + inline(t) + "</p>");
      }
      i++;
    }
    closeList();
    return html.join("\n");
  }

  function parseCourse(md) {
    var lines = md.split(/\r?\n/);
    var introLines = [];
    var modules = [];
    var refcardLines = null;
    var target = introLines;
    lines.forEach(function (line) {
      var m = line.match(/^## Module (\d+):\s*(.+)$/);
      if (m) {
        var mod = { num: parseInt(m[1], 10), title: m[2].trim(), lines: [], checks: [] };
        modules.push(mod);
        target = mod.lines;
      } else if (/^## Reference card\s*$/.test(line)) {
        refcardLines = [];
        target = refcardLines;
      } else if (line.indexOf("# ") === 0 && target === introLines) {
        // course title — shown in the header already
      } else {
        target.push(line);
      }
    });
    modules.forEach(function (mod) {
      mod.html = renderBlocks(mod.lines, mod.checks);
      mod.stub = mod.lines.join("\n").indexOf("(Content to follow") !== -1;
    });
    return {
      intro: renderBlocks(introLines, null),
      modules: modules,
      refcard: refcardLines ? renderBlocks(refcardLines, null) : null
    };
  }

  /* ---------- progress helpers ---------- */

  function availableModules() {
    return course.modules.filter(function (m) { return !m.stub; });
  }
  function doneCount() {
    return availableModules().filter(function (m) { return state.done[m.num]; }).length;
  }
  function allModulesDone() {
    var avail = availableModules();
    return avail.length > 0 && avail.every(function (m) { return state.done[m.num]; });
  }
  function allChecksCorrect(mod) {
    var c = state.checks[mod.num] || {};
    for (var i = 0; i < mod.checks.length; i++) { if (!c[i]) return false; }
    return true;
  }
  function moduleTitle(num) {
    var mod = course.modules.filter(function (m) { return m.num === num; })[0];
    return mod ? mod.title : "Module " + num;
  }
  function bestAttempt() {
    return state.attempts.reduce(function (best, a) {
      return (!best || a.score > best.score) ? a : best;
    }, null);
  }
  function latestPass() {
    for (var i = state.attempts.length - 1; i >= 0; i--) {
      if (state.attempts[i].pass) return state.attempts[i];
    }
    return null;
  }

  /* ---------- shared chrome ---------- */

  function setFooter() {
    var el = document.getElementById("foot-version");
    el.textContent = "Course version " + (CFG.courseVersion || "?") +
      " — built from " + (CFG.builtFrom || "the project source documents") + ".";
  }

  function privacyHtml() {
    return (
      '<details><summary>What data this course collects, and who sees it</summary>' +
      "<p>While you study, nothing is collected. Your progress is stored only on this device and is never sent anywhere.</p>" +
      "<p>When you submit a final assessment result, the following is recorded: your name, your agency or employer, your mobile number, your email address, the date, your attempt number and your score. This is used to evidence that you are competent to work on Project Rose sites, and it is seen by the Celestra project team.</p>" +
      "<p>The data controller is Celestra Limited, 1–5 James Way, Bletchley, Milton Keynes, MK1 1SU. Records are kept for the duration of the project and a period afterwards <span class=\"todo\">retention period to be confirmed by Celestra</span>. Under UK GDPR you can ask to see, correct or delete your data by contacting the Celestra project team, or via your agency.</p>" +
      "<p>This site uses no cookies and no analytics.</p></details>"
    );
  }

  /* ---------- contents view ---------- */

  function contentsView() {
    var avail = availableModules();
    var done = doneCount();
    var pct = avail.length ? Math.round((done / avail.length) * 100) : 0;
    var html = [];
    html.push("<h1>Project Rose — Engineer Training</h1>");
    html.push(course.intro);
    html.push(privacyHtml());
    html.push('<div class="progress-block"><div class="progress-label" id="progress-label">' +
      done + " of " + avail.length + " module" + (avail.length === 1 ? "" : "s") + " complete" +
      (course.modules.length > avail.length ? " — " + (course.modules.length - avail.length) + " more to be added" : "") +
      "</div>" +
      '<div class="progress-track" role="progressbar" aria-labelledby="progress-label" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + pct + '">' +
      '<div class="progress-fill" style="width:' + pct + '%"></div></div></div>');
    html.push('<ul class="module-list">');
    course.modules.forEach(function (mod) {
      var isDone = !!state.done[mod.num];
      var cls = "module-link" + (isDone ? " done" : "") + (mod.stub ? " stub" : "");
      var status = mod.stub ? "Not yet written" : (isDone ? "Done" : "Not started");
      html.push('<li><a class="' + cls + '" href="#/m/' + mod.num + '">' +
        '<span class="module-num" aria-hidden="true">' + mod.num + "</span>" +
        "<span>" + escapeHtml(mod.title) + "</span>" +
        '<span class="module-status">' + status + "</span></a></li>");
    });
    html.push("</ul>");

    if (course.refcard) {
      html.push("<h2>On-site reference card</h2>");
      html.push('<p>One page with the night in order, the golden rules and the escalation ladder. Save it, screenshot it or print it <strong>before</strong> you lose signal.</p>');
      html.push('<a class="btn secondary" href="#/card">Open the reference card</a>');
    }

    html.push("<h2>Final assessment</h2>");
    var pass = latestPass();
    if (pass) {
      html.push("<p>Passed on " + escapeHtml(pass.date) + " with " + pass.score + "%. Reference " + escapeHtml(pass.ref) + ".</p>");
      html.push('<a class="btn" href="#/certificate">View your certificate</a>');
      html.push('<a class="btn secondary" href="#/assessment">Assessment details</a>');
    } else if (!allModulesDone()) {
      html.push('<p class="assessment-locked">The assessment unlocks when every module is complete: ' +
        (CFG.questionsPerPaper || 20) + " questions, pass mark " + (CFG.passMarkPercent || 80) + "%, unlimited retakes.</p>");
    } else {
      var best = bestAttempt();
      if (best) html.push("<p>Attempts so far: " + state.attempts.length + ". Best score: " + best.score + "%.</p>");
      html.push('<a class="btn" href="#/assessment">' + (state.attempts.length ? "Retake the assessment" : "Start the assessment") + "</a>");
    }
    return html.join("\n");
  }

  /* ---------- module view ---------- */

  function checkHtml(mod, idx) {
    var check = mod.checks[idx];
    var answered = (state.checks[mod.num] || {})[idx];
    var html = [];
    html.push('<div class="check" data-mod="' + mod.num + '" data-check="' + idx + '">');
    html.push('<p class="check-tag">Practice — does not count towards your score</p>');
    html.push('<p class="check-q" id="q-' + mod.num + "-" + idx + '">' + inline(check.q) + "</p>");
    html.push('<ul class="opts" role="group" aria-labelledby="q-' + mod.num + "-" + idx + '">');
    check.options.forEach(function (opt, oi) {
      html.push('<li><button type="button" class="opt-btn' + (answered && opt.correct ? " is-right" : "") + '" data-opt="' + oi + '" aria-pressed="false"' +
        (answered ? " disabled" : "") + ">" + inline(opt.text) + "</button></li>");
    });
    html.push("</ul>");
    html.push('<div class="check-feedback" role="status" hidden></div>');
    if (answered) {
      var right = check.options.filter(function (o) { return o.correct; })[0];
      html.push('<div class="check-feedback good"><span class="verdict">Answered correctly.</span>' + inline(right.why) + "</div>");
    }
    html.push("</div>");
    return html.join("\n");
  }

  function moduleView(num) {
    var mod = course.modules.filter(function (m) { return m.num === num; })[0];
    if (!mod) return "<h1>Not found</h1><p><a href=\"#\">Back to contents</a></p>";
    var html = [];
    html.push('<p class="crumb"><a href="#">Contents</a> — Module ' + mod.num + " of " + course.modules.length + "</p>");
    html.push("<h1>" + escapeHtml(mod.title) + "</h1>");
    html.push(mod.html);
    if (mod.checks.length) {
      html.push("<h2>Check yourself</h2>");
      mod.checks.forEach(function (c, idx) { html.push(checkHtml(mod, idx)); });
    }
    html.push('<div class="module-nav">');
    if (mod.stub) {
      html.push('<p class="assessment-locked">This module has not been written yet.</p>');
      html.push('<a class="btn secondary" href="#">Back to contents</a>');
    } else if (state.done[mod.num]) {
      html.push('<p>Module complete.</p><a class="btn" href="#">Back to contents</a>');
    } else {
      var ready = allChecksCorrect(mod);
      html.push('<button type="button" class="btn" id="complete-btn"' + (ready ? "" : " disabled") + ">Mark module complete</button>");
      if (!ready) html.push('<p class="assessment-locked" id="complete-hint">Answer each practice question correctly to finish the module.</p>');
      html.push('<a class="btn secondary" href="#">Back to contents</a>');
    }
    html.push("</div>");
    return html.join("\n");
  }

  function wireModule(num) {
    var mod = course.modules.filter(function (m) { return m.num === num; })[0];
    if (!mod) return;

    // a revisit clears this module from the retake block
    var rb = state.retakeBlock.indexOf(num);
    if (rb !== -1 && !mod.stub) {
      state.retakeBlock.splice(rb, 1);
      saveState(state);
    }

    appEl.querySelectorAll(".check").forEach(function (checkEl) {
      var idx = parseInt(checkEl.getAttribute("data-check"), 10);
      var check = mod.checks[idx];
      var feedback = checkEl.querySelector(".check-feedback");

      checkEl.querySelectorAll(".opt-btn").forEach(function (btn) {
        btn.addEventListener("click", function () {
          var oi = parseInt(btn.getAttribute("data-opt"), 10);
          var opt = check.options[oi];
          checkEl.querySelectorAll(".opt-btn").forEach(function (b) {
            b.setAttribute("aria-pressed", b === btn ? "true" : "false");
            b.classList.remove("is-right", "is-wrong");
          });
          btn.classList.add(opt.correct ? "is-right" : "is-wrong");
          feedback.hidden = false;
          feedback.className = "check-feedback " + (opt.correct ? "good" : "bad");
          feedback.innerHTML = '<span class="verdict">' + (opt.correct ? "Right." : "Not right.") + "</span>" + inline(opt.why || "");
          if (opt.correct) {
            state.checks[mod.num] = state.checks[mod.num] || {};
            state.checks[mod.num][idx] = true;
            saveState(state);
            checkEl.querySelectorAll(".opt-btn").forEach(function (b) { b.disabled = true; });
            var btnDone = document.getElementById("complete-btn");
            if (btnDone && allChecksCorrect(mod)) {
              btnDone.disabled = false;
              var hint = document.getElementById("complete-hint");
              if (hint) hint.remove();
            }
          }
        });
      });
    });

    var completeBtn = document.getElementById("complete-btn");
    if (completeBtn) {
      completeBtn.addEventListener("click", function () {
        state.done[mod.num] = true;
        saveState(state);
        location.hash = "";
      });
    }
  }

  /* ---------- assessment ---------- */

  function loadBank() {
    if (bank) return Promise.resolve(bank);
    return fetch("bank.json", { cache: "no-cache" }).then(function (r) {
      if (!r.ok) throw new Error("HTTP " + r.status);
      return r.json();
    }).then(function (b) { bank = b; return bank; });
  }

  function buildPaper() {
    var weights = CFG.paperWeights || {};
    var paper = [];
    Object.keys(weights).forEach(function (modKey) {
      var pool = bank.filter(function (q) { return !q.held && q.module === parseInt(modKey, 10); });
      var picks = shuffle(pool).slice(0, weights[modKey]);
      paper = paper.concat(picks);
    });
    paper = shuffle(paper);
    return paper.map(function (q) {
      // display order for options: a permutation of stored indices
      var perm = shuffle(q.options.map(function (_, i) { return i; }));
      return { q: q, perm: perm };
    });
  }

  function assessmentIntroView() {
    var html = [];
    html.push('<p class="crumb"><a href="#">Contents</a> — Final assessment</p>');
    html.push("<h1>Final assessment</h1>");
    if (!allModulesDone()) {
      html.push("<p>The assessment unlocks when every module is complete. You have finished " + doneCount() + " of " + availableModules().length + ".</p>");
      html.push('<a class="btn secondary" href="#">Back to contents</a>');
      return html.join("\n");
    }
    if (state.retakeBlock.length) {
      html.push("<p>Before you can retake, revisit the modules your wrong answers came from:</p>");
      html.push('<ul class="module-list">');
      state.retakeBlock.forEach(function (num) {
        html.push('<li><a class="module-link" href="#/m/' + num + '"><span class="module-num" aria-hidden="true">' + num + "</span><span>" +
          escapeHtml(moduleTitle(num)) + '</span><span class="module-status">Revisit</span></a></li>');
      });
      html.push("</ul>");
      html.push('<a class="btn secondary" href="#">Back to contents</a>');
      return html.join("\n");
    }
    var attemptNo = state.attempts.length + 1;
    var c = state.candidate || {};
    html.push("<p>" + (CFG.questionsPerPaper || 20) + " questions, drawn at random — every attempt is a different paper. Pass mark " +
      (CFG.passMarkPercent || 80) + "%. Unlimited retakes. This is attempt " + attemptNo + ".</p>");
    html.push('<div class="warn-card"><p>Complete the assessment in one sitting. If you close the page or go back mid-paper, the attempt is abandoned (nothing is recorded) and you start a fresh paper.</p></div>');
    html.push("<h2>Your details</h2>");
    html.push("<p>These go on your result and your certificate. See the privacy notice on the contents page for what is collected and who sees it.</p>");
    html.push('<form id="candidate-form" novalidate>');
    html.push(fieldHtml("cand-name", "Full name", c.name));
    html.push(fieldHtml("cand-agency", "Agency or employer", c.agency));
    html.push(fieldHtml("cand-mobile", "Mobile number", c.mobile));
    html.push(fieldHtml("cand-email", "Email address", c.email));
    html.push('<p class="assessment-locked" id="form-error" role="alert" hidden>All four details are needed before you start.</p>');
    html.push('<button type="submit" class="btn">Start attempt ' + attemptNo + "</button>");
    html.push("</form>");
    html.push('<a class="btn secondary" href="#">Back to contents</a>');
    return html.join("\n");
  }

  function fieldHtml(id, label, value) {
    return '<div class="field"><label for="' + id + '">' + label + '</label>' +
      '<input id="' + id + '" name="' + id + '" type="text" autocomplete="off" value="' + escapeHtml(value || "") + '"></div>';
  }

  function wireAssessmentIntro() {
    var form = document.getElementById("candidate-form");
    if (!form) return;
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var get = function (id) { return document.getElementById(id).value.trim(); };
      var cand = { name: get("cand-name"), agency: get("cand-agency"), mobile: get("cand-mobile"), email: get("cand-email") };
      if (!cand.name || !cand.agency || !cand.mobile || !cand.email) {
        document.getElementById("form-error").hidden = false;
        return;
      }
      state.candidate = cand;
      saveState(state);
      loadBank().then(function () {
        exam = { step: "paper", paper: buildPaper(), attemptNo: state.attempts.length + 1 };
        render();
      }).catch(function (err) {
        appEl.insertAdjacentHTML("beforeend", '<p class="warn-card">The question bank could not load (' + escapeHtml(String(err.message || err)) + "). Check your connection and try again.</p>");
      });
    });
  }

  function paperView() {
    var html = [];
    html.push("<h1>Final assessment — attempt " + exam.attemptNo + "</h1>");
    html.push("<p>" + exam.paper.length + " questions. Answer every one, then submit at the bottom. Do not leave this page mid-attempt.</p>");
    exam.paper.forEach(function (entry, qi) {
      var q = entry.q;
      html.push('<fieldset class="exam-q" data-qi="' + qi + '"><legend><span class="exam-num">Question ' + (qi + 1) + "</span> " + inline(q.text) + "</legend>");
      if (q.img) {
        html.push('<p><a href="' + escapeHtml(q.img) + '" target="_blank" rel="noopener"><img src="' + escapeHtml(q.img) + '" alt="' + escapeHtml(q.alt || "") + '" loading="lazy"></a></p>');
      }
      if (q.type === "order") {
        html.push('<p class="exam-hint">Put these in order using the Up and Down buttons.</p>');
        html.push('<ol class="order-list">');
        entry.perm.forEach(function (storedIdx) {
          html.push('<li class="order-item" data-stored="' + storedIdx + '">' +
            '<span class="order-text">' + inline(q.options[storedIdx]) + "</span>" +
            '<span class="order-btns">' +
            '<button type="button" class="order-up" aria-label="Move up">▲</button>' +
            '<button type="button" class="order-down" aria-label="Move down">▼</button>' +
            "</span></li>");
        });
        html.push("</ol>");
      } else {
        var inputType = q.type === "multi" ? "checkbox" : "radio";
        if (q.type === "multi") html.push('<p class="exam-hint">Select all that apply.</p>');
        html.push('<ul class="exam-opts">');
        entry.perm.forEach(function (storedIdx, oi) {
          var id = "q" + qi + "o" + oi;
          html.push('<li><input type="' + inputType + '" name="q' + qi + '" id="' + id + '" value="' + storedIdx + '">' +
            '<label for="' + id + '">' + inline(q.options[storedIdx]) + "</label></li>");
        });
        html.push("</ul>");
      }
      html.push("</fieldset>");
    });
    html.push('<p class="assessment-locked" id="paper-error" role="alert" hidden></p>');
    html.push('<button type="button" class="btn" id="submit-paper">Submit answers</button>');
    return html.join("\n");
  }

  function wirePaper() {
    appEl.querySelectorAll(".order-list").forEach(function (list) {
      list.addEventListener("click", function (e) {
        var up = e.target.closest(".order-up");
        var down = e.target.closest(".order-down");
        if (!up && !down) return;
        var li = e.target.closest(".order-item");
        if (up && li.previousElementSibling) li.parentNode.insertBefore(li, li.previousElementSibling);
        if (down && li.nextElementSibling) li.parentNode.insertBefore(li.nextElementSibling, li);
        e.target.closest(".order-btns") && e.target.focus();
      });
    });
    document.getElementById("submit-paper").addEventListener("click", gradePaper);
  }

  function collectAnswer(qi, entry) {
    var q = entry.q;
    var fs = appEl.querySelector('.exam-q[data-qi="' + qi + '"]');
    if (q.type === "order") {
      var seq = Array.prototype.map.call(fs.querySelectorAll(".order-item"), function (li) {
        return li.getAttribute("data-stored");
      });
      return seq.join(",");
    }
    var chosen = Array.prototype.map.call(fs.querySelectorAll("input:checked"), function (inp) {
      return parseInt(inp.value, 10);
    });
    if (!chosen.length) return null; // unanswered
    if (q.type === "multi") return chosen.sort(function (a, b) { return a - b; }).join(",");
    return String(chosen[0]);
  }

  function gradePaper() {
    var unanswered = [];
    var answers = exam.paper.map(function (entry, qi) {
      var a = collectAnswer(qi, entry);
      if (a === null) unanswered.push(qi + 1);
      return a;
    });
    var errEl = document.getElementById("paper-error");
    if (unanswered.length) {
      errEl.hidden = false;
      errEl.textContent = "Answer every question before submitting. Unanswered: " + unanswered.join(", ") + ".";
      return;
    }
    errEl.hidden = true;
    Promise.all(exam.paper.map(function (entry, qi) {
      return sha256hex(entry.q.id + "|" + answers[qi] + "|" + SALT).then(function (hex) {
        return hex === entry.q.key;
      });
    })).then(function (results) {
      var correct = results.filter(Boolean).length;
      var score = Math.round((correct / exam.paper.length) * 100);
      var pass = score >= (CFG.passMarkPercent || 80);
      var failedModules = [];
      results.forEach(function (ok, qi) {
        var m = exam.paper[qi].q.module;
        if (!ok && failedModules.indexOf(m) === -1) failedModules.push(m);
      });
      failedModules.sort(function (a, b) { return a - b; });
      var attempt = { n: exam.attemptNo, date: todayISO(), score: score, pass: pass, failedModules: failedModules, ref: makeRef() };
      state.attempts.push(attempt);
      if (!pass) state.retakeBlock = failedModules.slice();
      saveState(state);
      exam = { step: "result", attempt: attempt };
      render();
    });
  }

  function resultsFormLink(attempt) {
    var template = CFG.resultsFormUrl || "";
    if (!template) return null;
    var c = state.candidate || {};
    var map = {
      "{name}": c.name || "", "{agency}": c.agency || "", "{mobile}": c.mobile || "",
      "{email}": c.email || "", "{date}": attempt.date, "{attempt}": String(attempt.n),
      "{score}": String(attempt.score), "{ref}": attempt.ref
    };
    var url = template;
    Object.keys(map).forEach(function (k) {
      url = url.split(k).join(encodeURIComponent(map[k]));
    });
    return url;
  }

  function resultView() {
    var a = exam.attempt;
    var html = [];
    html.push("<h1>" + (a.pass ? "Passed — " : "Not passed — ") + a.score + "%</h1>");
    html.push("<p>Attempt " + a.n + ", " + escapeHtml(a.date) + ". Pass mark " + (CFG.passMarkPercent || 80) + "%.</p>");
    html.push('<div class="note-card"><p><strong>Your result reference: ' + escapeHtml(a.ref) + "</strong><br>Screenshot this screen now, before anything else.</p></div>");

    var formUrl = resultsFormLink(a);
    html.push("<h2>Record your result</h2>");
    if (formUrl) {
      html.push("<p>Your result must be recorded with the project team. The form opens with everything filled in — check it and press Submit. The confirmation screen you see after submitting is your receipt.</p>");
      html.push('<a class="btn" href="' + escapeHtml(formUrl) + '" target="_blank" rel="noopener">Open the results form</a>');
      html.push('<p class="assessment-locked">If the form does not open or will not submit — no signal, blocked browser — screenshot this screen and send it to the project team in your group chat instead. Your reference is proof of the attempt.</p>');
    } else {
      html.push('<div class="warn-card"><p>The results form is not yet set up. Screenshot this screen — name, score, date and reference — and send it to the project team in your group chat.</p></div>');
    }

    if (a.pass) {
      html.push("<h2>Your certificate</h2>");
      html.push('<a class="btn" href="#/certificate">View and print your certificate</a>');
    } else {
      html.push("<h2>Before you retake</h2>");
      html.push("<p>Your wrong answers came from these modules. Work back through them — the retake unlocks once you have revisited each one. Every retake is a fresh paper.</p>");
      html.push('<ul class="module-list">');
      a.failedModules.forEach(function (num) {
        html.push('<li><a class="module-link" href="#/m/' + num + '"><span class="module-num" aria-hidden="true">' + num + "</span><span>" +
          escapeHtml(moduleTitle(num)) + '</span><span class="module-status">Revisit</span></a></li>');
      });
      html.push("</ul>");
    }
    html.push('<a class="btn secondary" href="#">Back to contents</a>');
    return html.join("\n");
  }

  function assessmentView() {
    if (exam && exam.step === "paper") return paperView();
    if (exam && exam.step === "result") return resultView();
    return assessmentIntroView();
  }

  function wireAssessment() {
    if (exam && exam.step === "paper") { wirePaper(); return; }
    if (exam && exam.step === "result") { return; }
    wireAssessmentIntro();
  }

  /* ---------- certificate ---------- */

  function certificateView() {
    var pass = latestPass();
    if (!pass) {
      return '<h1>No certificate yet</h1><p>The certificate is issued when you pass the assessment.</p><a class="btn secondary" href="#">Back to contents</a>';
    }
    var c = state.candidate || {};
    var html = [];
    html.push('<p class="crumb no-print"><a href="#">Contents</a> — Certificate</p>');
    html.push('<div class="certificate">');
    html.push('<img class="cert-logo" src="assets/celestra-logo.jpg" alt="Celestra — Serving Star Solutions">');
    html.push("<h1>Certificate of completion</h1>");
    html.push('<p class="cert-name">' + escapeHtml(c.name || "") + "</p>");
    html.push('<p>of ' + escapeHtml(c.agency || "") + "</p>");
    html.push("<p>has completed <strong>Project Rose — Engineer Training</strong> and passed the validation assessment with a score of <strong>" +
      pass.score + "%</strong> (pass mark " + (CFG.passMarkPercent || 80) + "%).</p>");
    html.push('<p class="cert-meta">Date: ' + escapeHtml(pass.date) + "<br>Course version: " + escapeHtml(CFG.courseVersion || "") +
      "<br>Certificate reference: " + escapeHtml(pass.ref) + "</p>");
    html.push('<p class="cert-foot">Issued by the Project Rose training site. Verify against the results register held by the Celestra project team.</p>');
    html.push("</div>");
    html.push('<button type="button" class="btn no-print" onclick="window.print()">Print or save as PDF</button>');
    html.push('<a class="btn secondary no-print" href="#">Back to contents</a>');
    return html.join("\n");
  }

  /* ---------- reference card ---------- */

  function cardView() {
    var html = [];
    html.push('<p class="crumb no-print"><a href="#">Contents</a> — Reference card</p>');
    html.push('<div class="refcard">');
    html.push(course.refcard || "<p>No reference card in this build.</p>");
    html.push("</div>");
    html.push('<button type="button" class="btn no-print" onclick="window.print()">Print or save as PDF</button>');
    html.push('<p class="assessment-locked no-print">Or screenshot it — it is designed to read on one phone screen per section.</p>');
    html.push('<a class="btn secondary no-print" href="#">Back to contents</a>');
    return html.join("\n");
  }

  /* ---------- router ---------- */

  function render() {
    var hash = location.hash;
    var m = hash.match(/^#\/m\/(\d+)$/);
    if (m) {
      var num = parseInt(m[1], 10);
      exam = null;
      appEl.innerHTML = moduleView(num);
      var mod = course.modules.filter(function (x) { return x.num === num; })[0];
      document.title = (mod ? "Module " + mod.num + ": " + mod.title : "Not found") + " — Project Rose Training";
      wireModule(num);
    } else if (hash === "#/assessment") {
      appEl.innerHTML = assessmentView();
      document.title = "Final assessment — Project Rose Training";
      wireAssessment();
    } else if (hash === "#/certificate") {
      exam = null;
      appEl.innerHTML = certificateView();
      document.title = "Certificate — Project Rose Training";
    } else if (hash === "#/card") {
      exam = null;
      appEl.innerHTML = cardView();
      document.title = "Reference card — Project Rose Training";
    } else {
      exam = null;
      appEl.innerHTML = contentsView();
      document.title = "Project Rose — Engineer Training";
    }
    document.getElementById("main").focus();
    window.scrollTo(0, 0);
  }

  /* ---------- boot ---------- */

  // no-cache: always revalidate so a revised course is picked up on next load
  fetch("CONTENT.md", { cache: "no-cache" })
    .then(function (r) {
      if (!r.ok) throw new Error("HTTP " + r.status);
      return r.text();
    })
    .then(function (md) {
      course = parseCourse(md);
      setFooter();
      render();
      window.addEventListener("hashchange", render);
    })
    .catch(function (err) {
      appEl.innerHTML = "<h1>The course could not load</h1>" +
        "<p>The course content file did not load (" + escapeHtml(String(err.message || err)) + ").</p>" +
        "<p>Check your connection and reload the page. If you opened this file directly from your phone's storage, it must be opened from the course web address instead.</p>";
    });
})();
