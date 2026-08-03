# Project Rose — Assessment traceability

Every assessment question maps to a course module and to its source in the
installation guide (Rose Cut-Over Process Guide v0.01), the statement of work
(Celestra Whitbread Project SOW, 2 March 2026), the project escalation planner,
or a documented project-manager decision recorded during course development
("PM answer/decision" — the numbered answers given by the project manager while
the course was specified).

The paper is 20 questions drawn at random per attempt, weighted by module as
set in config.js: Module 4 ×2, Module 5 ×3, Module 6 ×3, Module 7 ×5,
Module 9 ×2, Module 10 ×2, Module 11 ×3. Pass mark 90%. Module 8 (Testing)
questions are held out of the live paper until pilot 2 confirms the testing
procedure.

Live bank: 63 questions. Held back (Module 8): 6.

| ID | Module | Type | Status | Source | Question |
|----|--------|------|--------|--------|----------|
| Q1 | 4 | single | live | Guide: Pre-Req | Which three end-of-day items must the site confirm complete before the night can start? |
| Q2 | 4 | single | live | Guide: Pre-Req | Before rebooting the Micros server, how do you confirm you are on the right machine? |
| Q3 | 4 | single | live | Guide: Pre-Req | Which tills and clocks are rebooted during the pre-requisites? |
| Q4 | 4 | single | live | Guide: KMS Shutdown | How do you reach the KMS server to shut it down? |
| Q5 | 4 | single | live | Guide: KMS Shutdown | In what order does the KMS get shut down? |
| Q6 | 4 | single | live | Guide: Pre-Req; PM decision | The site has not run end of day and the manager is leaving. What is the rule? |
| Q7 | 5 | single | live | SOW 3.3 | Which payment devices stay at the site after cutover? |
| Q8 | 5 | single | live | SOW 3.3 | A PED is being removed. What comes out with it? |
| Q9 | 5 | single | live | SOW 3.3 | There are no PED keys on site. What does that mean? |
| Q10 | 5 | order | live | Guide: PED Config photo sequence (Lane/3000) | Put the Lane/3000 wired PED config update steps in order. |
| Q11 | 5 | order | live | Guide: PED Config photo sequence (PAX A920) | Put the PAX A920 wireless PED config update steps in order. |
| Q12 | 5 | single | live | PM decision (credentials out of course) | Where does the A920 config passcode come from? |
| Q13 | 5 | image | live | Guide: PED Config photos | A retained A920 shows this screen. What does it need? |
| Q14 | 5 | single | live | Escalation planner; PM decision | You have run the config update twice and the PED still shows the old brand. What now? |
| Q15 | 5 | single | live | Guide: PED Config | Which PEDs need the logo check? |
| Q16 | 6 | single | live | PM answer (kit list) | What model is the new kitchen printer? |
| Q17 | 6 | single | live | SOW 3.3 | Who decides where the kitchen printer is installed? |
| Q18 | 6 | single | live | Printer guide v2.1 step 4 | Where is the splitter box mounted? |
| Q19 | 6 | single | live | SOW 3.1.2 | Who ran the data cabling between the bar, the comms cabinet and the kitchen? |
| Q20 | 6 | image | live | Printer guide v2.1 leads 2/5; wiring diagram | What is the connection marked "?" — from the splitter to the receipt printer's IDN1 port? |
| Q21 | 6 | single | live | Printer guide v2.1 lead 4 | What is the rule inside the comms cabinet? |
| Q22 | 6 | single | live | Guide: wiring diagram | In the kitchen, the printer connects from the wall data socket to which port on the printer? |
| Q23 | 6 | multi | live | Printer guide v2.1 route; wiring diagram | What connects into the splitter box? Select all that apply. |
| Q24 | 6 | single | live | SOW 3.1.2; PM answer 13 | A data socket your schematic relies on is dead. What do you do? |
| Q25 | 7 | order | live | Guide: Script Cut-Over | Put the migration script stages in the order you run them. |
| Q26 | 7 | single | live | Guide: Script Cut-Over | What state are the tills and T&A clocks in when you select Prepare? |
| Q27 | 7 | single | live | Guide: Script Cut-Over | What state are the tills and T&A clocks in when you select Migrate? |
| Q28 | 7 | single | live | Guide: Script Cut-Over | How is the migration script launched? |
| Q29 | 7 | single | live | Guide: Script Cut-Over | Which two windows should open when the script starts? |
| Q30 | 7 | single | live | Guide: Script Cut-Over | How long can the script take to open? |
| Q31 | 7 | single | live | Guide: Script Cut-Over | Prepare asks you to confirm a list of actions is complete, but one pre-requisite is not done. What do you select? |
| Q32 | 7 | single | live | Guide: Script Cut-Over | Prepare has just completed and you have selected OK. What happens next? |
| Q33 | 7 | single | live | Guide: Script Cut-Over | While Migrate is running, what are you allowed to touch? |
| Q34 | 7 | single | live | Guide: Script Cut-Over | Migrate has shown no change for ten minutes. What is the rule? |
| Q35 | 7 | single | live | Guide: Script Cut-Over | Which error after Migrate is expected, needing only OK? |
| Q36 | 7 | single | live | Guide: Script Cut-Over | A till shows an error you do not recognise after Migrate. What do you do? |
| Q37 | 7 | single | live | Guide: Script Cut-Over | Migrate has completed and you selected OK. What next? |
| Q38 | 7 | single | live | Guide: Script Cut-Over | What does completing Post do, besides finishing the script? |
| Q39 | 7 | multi | live | Guide + escalation planner golden rules | Which of these are golden rules of the script? Select all that apply. |
| Q40 | 7 | single | live | Guide: Script Cut-Over | After Post completes, how do you leave the Micros server? |
| Q41 | 7 | single | live | Guide: Script Cut-Over | Where does the migration script live? |
| Q42 | 7 | single | live | Guide: Script Cut-Over; PM decision | Who runs the migration script at your site? |
| Q43 | 9 | single | live | SOW 3.3/3.4 | When does the de-install happen? |
| Q44 | 9 | single | live | PM answer 11 | What gets recorded for every item you remove, and where? |
| Q45 | 9 | single | live | PM answer 11 | What is written on every box of removed kit? |
| Q46 | 9 | multi | live | SOW App 5; training plan S3 | Which of these stay at the site? Select all that apply. |
| Q47 | 9 | single | live | PM answer 11; training plan S3 | Why does the photo of the boxed kit matter? |
| Q48 | 9 | order | live | PM answer 11 | Put the kit recovery steps in order. |
| Q49 | 10 | single | live | SOW 3.1.5; Module 10 | When do you fill in your iAuditor report? |
| Q50 | 10 | single | live | SOW 3.5; PM answer 19 | What does the 06:30 walkthrough with the manager cover? |
| Q51 | 10 | single | live | SOW 3.1.5; escalation planner | No manager has arrived by 06:30. What is the process? |
| Q52 | 10 | single | live | Module 10 | What are the only two ways to leave a site at the end of the night? |
| Q53 | 10 | multi | live | SOW 3.1.5; Modules 9–10 | Which of these belong in your evidence for the night? Select all that apply. |
| Q54 | 10 | single | live | SOW 3.1.5 | After your evidence is submitted, how long does Whitbread have to raise a defect on the night's work? |
| Q55 | 11 | single | live | Escalation planner | You are stuck. Who do you contact first, and how? |
| Q56 | 11 | single | live | Escalation planner | Roughly how long do you spend stuck before escalating? |
| Q57 | 11 | single | live | PM answer 20 | How does all communication run on the night? |
| Q58 | 11 | single | live | Escalation planner | Which of these goes to your coordinator rather than up the technical ladder? |
| Q59 | 11 | single | live | Escalation planner | Who raises issues into Whitbread platform engineering? |
| Q60 | 11 | single | live | Escalation planner | Till 1 is hardware-dead. What happens? |
| Q61 | 11 | single | live | Escalation planner | The kitchen printer will not test. What is the sequence? |
| Q62 | 11 | single | live | Escalation planner | What must you never do with a site, even at 4am with everything finished? |
| Q63 | 11 | single | live | Escalation planner; Module 11 | What should your first message contain when you raise a technical issue? |
| Q64 | 8 | single | held | Guide: testing screenshots | What exactly is the test order on each till? |
| Q65 | 8 | single | held | Guide: testing screenshots | Why those four test items? |
| Q66 | 8 | single | held | Guide: testing screenshots | How do you confirm a till is ready before the test order? |
| Q67 | 8 | single | held | PM answer 17 | How is each PED tested? |
| Q68 | 8 | single | held | Guide: testing screenshots | On a Band 2 site, where are the food categories? |
| Q69 | 8 | single | held | PM answer 19 | What happens to the receipts from testing? |
