// Project Rose training — site configuration.
// Edit the values here; nothing else in the code needs touching for these settings.
window.ROSE_CONFIG = {
  // Bump this when CONTENT.md changes after a guide revision. Shown in the
  // footer and printed on every certificate.
  courseVersion: "0.2 (draft)",

  // The source documents this course was built from.
  builtFrom: "Rose Cut-Over Process Guide v0.01 (draft), Kitchen Printer Cabling Guide v2.1, and Celestra Whitbread Project SOW, 2 March 2026",

  // Microsoft Forms pre-filled URL template for results capture.
  // Leave empty until the form exists — the results step then shows the
  // manual fallback (reference on screen) only. See HANDOVER.md for how to
  // fill this in once the form is created on the Celestra account.
  resultsFormUrl: "",

  // Assessment settings.
  passMarkPercent: 90,
  questionsPerPaper: 20,

  // How many questions each module contributes to a 20-question paper.
  // Module 8 (Testing) joins the paper after pilot 2 confirms the procedure —
  // see HANDOVER.md before changing these (they must sum to questionsPerPaper).
  paperWeights: { "4": 2, "5": 3, "6": 3, "7": 5, "9": 2, "10": 2, "11": 3 }
};
