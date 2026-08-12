// Project Rose training — site configuration.
// Edit the values here; nothing else in the code needs touching for these settings.
window.ROSE_CONFIG = {
  // Bump this when CONTENT.md changes after a guide revision. Shown in the
  // footer and printed on every certificate.
  courseVersion: "0.4 (draft)",

  // The source documents this course was built from.
  builtFrom: "Rose Cut-Over Process Guide v0.01 (draft), Rose Kitchen Printer Guide v2 (10 Aug 2026), and Celestra Whitbread Project SOW, 2 March 2026",

  // Microsoft Forms pre-filled URL template for results capture.
  // Leave empty until the form exists — the results step then shows the
  // manual fallback (reference on screen) only. See HANDOVER.md for how to
  // fill this in once the form is created on the Celestra account.
  resultsFormUrl: "",

  // Progress-tracking endpoint (Google Apps Script web app URL).
  // Empty = tracking off: no identity gate, no beacons, course works offline-first.
  // Set it and the course asks each engineer for their details up front and
  // reports module completions and assessment attempts to the tracking sheet.
  // Setup steps are in HANDOVER.md; the dashboard at dashboard.html reads the
  // same endpoint with the access key.
  trackingUrl: "https://script.google.com/macros/s/AKfycby6oaRlUpecpffR2xNebtoKYxPxZUM_qzcW5gp5sAo7752j7WItDo_JWQTu7sdMlj6-4w/exec",

  // Assessment settings.
  passMarkPercent: 90,
  questionsPerPaper: 20,

  // How many questions each module contributes to a 20-question paper.
  // Module 8 (Testing) joins the paper after pilot 2 confirms the procedure —
  // see HANDOVER.md before changing these (they must sum to questionsPerPaper).
  paperWeights: { "4": 2, "5": 3, "6": 3, "7": 5, "9": 2, "10": 2, "11": 3 }
};
