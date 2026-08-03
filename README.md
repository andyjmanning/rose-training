# Project Rose — Engineer Training

A self-contained online training course with a validation assessment, for the field
engineers working the Project Rose cutover nights. Plain HTML, CSS and vanilla
JavaScript — no build step, no framework, no server-side code, no login, no cost.


Built from the Rose Cut-Over Process Guide (v0.01), the Kitchen Printer Cabling Guide
(v2.1) and the signed Celestra Whitbread Project SOW (2 March 2026). Eleven modules with practice questions, a 20-question
randomised assessment (pass mark 90%, unlimited retakes), a printable on-site reference
card, and an in-browser completion certificate.


## Run it locally

The course loads its content with `fetch`, so it must be served over HTTP, not opened as
a file. With Python installed:

```
py -m http.server 8123 --directory "C:/Users/andyj/Project rose/rose-training"
```

Then open http://localhost:8123 in a browser.

## Deploy to GitHub Pages

1. Create a repository and push this folder's contents to it (repository root).
   The `.gitignore` keeps `tools/` — which contains the assessment answers in plain
   form — out of the repository. Check it is working: `tools/` must not appear on GitHub.
2. In the repository: Settings → Pages → Source: "Deploy from a branch" → branch `main`,
   folder `/ (root)`.
3. The course appears at `https://<username>.github.io/<repository>/` within minutes.

The `.nojekyll` file matters — it stops GitHub processing `CONTENT.md`. Do not delete it.

## Change it

- Course text and practice questions: edit `CONTENT.md` (conventions in HANDOVER.md).
- Assessment questions: edit `tools/ASSESSMENT-SOURCE.md`, then run
  `py tools/build_bank.py` to regenerate `bank.json` and `TRACEABILITY.md`.
- Settings (course version, pass mark, results form URL): `config.js`.

Full maintenance instructions, the Microsoft Forms wiring guide, known limitations and
the guide-revision process are in [HANDOVER.md](HANDOVER.md). The assessment blueprint
mapping every question to its source is in [TRACEABILITY.md](TRACEABILITY.md).
