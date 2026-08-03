# Project Rose training — handover notes

For the person maintaining this course. Written for one person with no build tools:
everything is plain HTML, CSS and JavaScript, edited with any text editor.

## How the site fits together

| File | What it is |
|------|-----------|
| `index.html` | The page shell. Rarely needs touching. |
| `CONTENT.md` | **All course text and practice questions.** Edit this to change the course. |
| `config.js` | Settings: course version, pass mark, paper weights, results form URL. |
| `bank.json` | The assessment questions with hashed answers. **Generated — do not edit by hand.** |
| `tools/ASSESSMENT-SOURCE.md` | The editable question bank **with answers in plain form**. Never published. |
| `tools/build_bank.py` | Regenerates `bank.json` and `TRACEABILITY.md` from the source file. |
| `TRACEABILITY.md` | Generated map of every question to its module and source clause. |
| `js/app.js`, `css/style.css` | The engine and styling. No course content inside. |
| `assets/` | Images, compressed for phones. |
| `.nojekyll` | Stops GitHub processing `CONTENT.md`. Do not delete. |
| `.gitignore` | Keeps `tools/` (the plain-text answers) out of the public repository. |

## Editing course content

Open `CONTENT.md`, edit, save, reload the page. Conventions:

- `## Module 7: Title` starts a module. `### ` is a section heading inside it.
- `!! text` makes a red do-not warning. `> text` makes a note card.
- `- ` bullets, `1. ` numbered steps, `**bold**`, `![alt text](assets/file.jpg)` images.
- Practice checks sit in a ` ```check ` fenced block at the end of a module: a `q:` line,
  a `type: single` line, then options as `- [ ] wrong :: why it is wrong` and
  `- [x] right :: why it is right`.
- `## Reference card` is the printable one-pager.

A module containing the text `(Content to follow` shows as "Not yet written" and cannot
be completed — that is how to stage a half-written module.

## Editing the assessment

1. Edit `tools/ASSESSMENT-SOURCE.md` (format is documented at the top of that file).
2. From this folder run:  `py tools/build_bank.py`
3. Commit and push `bank.json` and `TRACEABILITY.md`. Never publish the `tools/` folder.

To bring Module 8 (Testing) into the paper after pilot 2: confirm the testing content in
`CONTENT.md`, remove ` | held` from the Q64–Q69 headers in the source file, regenerate,
then edit `paperWeights` in `config.js` so the weights still sum to 20 (for example, take
one question each from modules 7 and 11 and give Module 8 two).

**The answer obfuscation is a deterrent, not security.** Answers are stored as SHA-256
digests, so they are not readable in the page source — but a determined engineer with
developer tools can brute-force each question's options against the digest in seconds
(this was demonstrated during testing). Accept this: the assessment's integrity ultimately
rests on it being quicker to learn the material than to cheat, and on spot verification
on the nights.

## Results capture — Microsoft Forms

The course cannot post results silently; it opens a pre-filled form the engineer submits
with one tap. To wire it up:

1. On the Celestra Microsoft account, at forms.office.com, create a form
   "Project Rose — Training Assessment Results" with eight **Text** questions in this
   order: Full name, Agency or employer, Mobile number, Email address, Date,
   Attempt number, Score percent, Result reference.
2. Set **Settings → Who can fill out this form → Anyone can respond**.
3. Open the form's **Collect responses** link, then build a pre-filled link:
   on the form's page choose "Get pre-filled URL" (under the share options), enter
   recognisable placeholder text in each field (e.g. `XNAMEX`), and copy the URL it gives.
4. In `config.js`, set `resultsFormUrl` to that URL with each placeholder replaced by the
   matching token: `{name}`, `{agency}`, `{mobile}`, `{email}`, `{date}`, `{attempt}`,
   `{score}`, `{ref}`. Keep everything else in the URL exactly as copied.
5. Test with a real attempt: the form should open with every field already filled.

Responses land in the form's linked Excel workbook (Forms → Responses → Open in Excel),
which lives in the account's OneDrive and can be shared with the project team.

If the engineer has no signal or the form is blocked, the result screen tells them to
screenshot it (name, score, date, reference) and send it to the project team in their
group chat. The reference (e.g. `ROSE-20260903-7KQ2`) is generated per attempt and also
printed on the certificate, so a screenshot can be reconciled later. **Limitation:** the
site cannot detect whether the form was actually submitted — the Forms confirmation
screen is the engineer's receipt, and gaps in the spreadsheet must be chased against the
competency register.

## When the installation guide is revised

1. Update the affected modules in `CONTENT.MD` and the reference card.
2. Update or add assessment questions in `tools/ASSESSMENT-SOURCE.md`; regenerate.
3. Bump `courseVersion` in `config.js` — certificates and the footer show it, so results
   in the spreadsheet are attributable to the version taken.
4. Circulate to stakeholders for review; the project manager approves release.
5. Push to GitHub — the site updates within minutes. Content is fetched with
   `cache: no-cache`, so phones pick up the new version on their next page load.

Certificates already issued keep the version they were earned against; nothing needs
reissuing unless the change invalidates prior competency, which is a project decision.

## Known limitations

- Progress and results live in the phone's localStorage: clearing browser data, switching
  browser or switching phone resets progress (the course warns about this). The results
  spreadsheet and competency register are the durable records, not the phone.
- The assessment must be completed in one sitting; navigating away abandons the attempt
  (nothing is recorded server-side either way).
- Result submission cannot be confirmed programmatically (see above).
- The certificate is generated client-side; it is evidence only in combination with the
  results spreadsheet ("verify against the results register" is printed on it).
- The answer key is obfuscated, not secure (see above).
- Testing module content is provisional until pilot 2; its questions are held out of the
  paper.
- No analytics: you cannot see who is part-way through, only who has submitted results.

## Zero-cost confirmation and third-party dependencies

Hosting: GitHub Pages, free for public repositories. Results: Microsoft Forms + Excel
under the existing Celestra Microsoft 365 account — no extra licence. Certificates: the
browser's own print-to-PDF. Optional videos: unlisted YouTube (free) — embed slots can be
added per module in `CONTENT.md` when the videos exist. Total recurring cost: £0.
Dependencies that could break things: GitHub Pages availability, Microsoft Forms
availability, and nothing else — no CDNs, no fonts, no analytics, no frameworks.

## If this ever needs SCORM or an LMS

What you would gain: verified identity/SSO, server-side attempt records with completion
tracking, resumable assessments, question-level analytics, and tamper-proof scoring.
What it costs: an LMS seat licence (typically per-user per-month), SCORM packaging work,
and an administrator. The content in `CONTENT.md` and the question bank in
`tools/ASSESSMENT-SOURCE.md` are deliberately plain text so they can be lifted into any
LMS without rework.

## Still to confirm (as at 3 August 2026)

- Retention period for assessment records — privacy notice shows a visible
  "to be confirmed" marker until supplied.
- What "WBD" stands for in the end-of-day list (Module 4 presents it as-is).
- Whether the Epson TM88 receipt printer is existing kit re-connected or a new install
  (Modules 6 and 9 are worded to be true either way).
- Testing procedure after pilot 2 (Module 8 + its six held questions).
- Splitter mounting detail and printer quirks from the test-lab sessions.
- The Microsoft Forms URL (results capture runs in fallback mode until set).
