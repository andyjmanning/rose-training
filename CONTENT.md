# Project Rose — Engineer Training

This course trains you to convert a Whitbread restaurant site to Premier Inn Solus as part of Project Rose. It covers the whole night: arrival, the PED checks, the pre-requisites, the migration script, the kitchen printer, testing, de-install, evidence and handover, and what to do when something goes wrong. The reference card at the end shows the running order of the night — note that the PED checks come early, while the manager is still there, and the kitchen printer is installed after the script has run.

Work through the modules in order. Each one takes a few minutes and ends with two or three practice questions — these are practice, they do not count towards anything. The final assessment at the end is 20 questions with a pass mark of 90%.

Your progress is saved on this phone only. If you clear your browser data, your progress is lost and you start again.

## Module 1: The job

Project Rose converts Whitbread restaurant sites to Premier Inn Solus. The restaurant closes under its current brand, and by morning its tills and payment devices are running as Premier Inn. Your job is the overnight IT cutover at one site.

### What changes on the night

- The tills and the retained PEDs are converted from the restaurant brand to Premier Inn.
- A new kitchen printer is installed at sites that currently run a Kitchen Management System (KMS).
- The KMS is shut down and removed.
- Surplus kit is de-installed, serial numbers recorded, boxed and left for courier collection the next day.

### What stays at the site and keeps working

- Till 1 and Till 2.
- Two wired PEDs and two wireless PEDs.
- Two bar printers.

Everything else on the removal list in your site pack comes out.

### The shape of the night

There are three cutover nights: Thursday 3, Monday 7 and Thursday 10 September 2026. You work at one site per night, mostly on your own in the restaurant: arrive at 20:30, hand back to the manager at 06:30. The hotel side has staff working all night, so there is someone in the building if anything urgent is needed. Around 240 sites are being converted across the brands — Beefeater, Brewers Fayre, Table Table, Bar & Block, Cookhouse and the inns. The install is the same at every brand. What varies is mainly what gets removed, and your site pack lists exactly what that is for your site.

You are on your own at the site, but not on your own on the night. You are part of a group of about ten engineers with a lead engineer, coordinators run the night behind them, and Celestra technical support is available remotely throughout. How to reach them — and when — is Module 11.

```check
q: It is 3am and the migration is done. Which tills should still be at the site, working?
type: single
- [x] Till 1 and Till 2. :: Right. Tills 1 and 2 are retained and converted, along with two wired PEDs, two wireless PEDs and two bar printers. Everything else on the site-pack list comes out.
- [ ] All of them — nothing is removed on the night. :: No. Surplus tills and kit are de-installed on the night, boxed and left for courier collection the next day.
- [ ] None — all tills are replaced with new ones. :: No new tills are installed. Tills 1 and 2 are kept and converted to Premier Inn; the rest are removed.
- [ ] Whichever tills the manager wants to keep. :: The retained kit is fixed — Tills 1 and 2, two wired PEDs, two wireless PEDs, two bar printers — not a choice made on the night.
```

```check
q: What is installed at a site that currently runs a Kitchen Management System?
type: single
- [x] One new kitchen printer — and the KMS itself is shut down and removed. :: Right. KMS sites get a kitchen printer so orders still reach the kitchen after the KMS is gone.
- [ ] A replacement KMS with Premier Inn branding. :: No. The KMS is decommissioned, not replaced. A kitchen printer takes over the job of getting orders to the kitchen.
- [ ] Two new tills. :: No tills are installed. The change in the kitchen is a new printer replacing the KMS.
- [ ] Nothing — KMS sites are out of scope. :: KMS sites are very much in scope; the KMS is shut down, removed, and a kitchen printer is installed in its place.
```

```check
q: What are the working hours of a cutover night?
type: single
- [ ] 18:00 to 02:00. :: No — the restaurant is still trading in the evening. You arrive at 20:30 and the night runs through to the 06:30 handover.
- [x] Arrive 20:30, hand over to the manager at 06:30. :: Right. Eight to ten hours overnight, ending with the morning handover.
- [ ] 20:30 until whenever you finish. :: The night has a fixed end: the 06:30 handover to the manager. Finishing early does not mean leaving early without completing handover and evidence.
- [ ] Midnight to 08:00. :: No. 20:30 arrival, 06:30 handover.
```

## Module 2: Before the night

You cannot be rostered until you have finished this course and passed the assessment. Once you are rostered you receive a site pack for your site. This module is what to have with you and what will already be there.

### Already at the site

The kit was delivered three to five days before the night: the new kitchen printer, power supplies, printer paper, splitter boxes, patch leads and cables. One of your first jobs on site is to find this delivery and check it is complete. Missing kit is a call to your group chat before you start, not a discovery at 2am.

### What you bring

- Screwdrivers — cross, flat head and 7mm security bits — snips or scissors, a small pry tool or spudger, and a permanent marker.
- A drill/driver and bits for mounting the 4-way box (some positions take a stick pad instead).
- Safety boots.
- Nice to have: a cable tester, a torch or head torch, and a socket set or pliers for the cash drawers.
- A charged phone with Microsoft Teams and WhatsApp installed and working. Everything on the night runs through group chats — there are no phone calls, because of the number of sites running at once.
- A personal contactless bank card. You prove each PED works with a real test payment — pay only the minimum needed, around 50p — and refund every test transaction on a wired PED before testing is finished. No card means you cannot complete the PED testing.
- Photo ID, and yourself presentable — you are working inside a trading hotel.
- Your site pack.

Celestra provide the printer install kit, the site-specific tech pack and the PED bags — they are with the site delivery, not on your bring list.

### Your site pack

The site pack is specific to your site and it is where the sensitive detail lives — none of it is in this course. It contains the site address and contacts, the account details for the site's systems, the site schematic showing where the kitchen printer and splitter go, the list of exactly what gets removed at your site, and the group chats and escalation contacts for your night.

!! No site pack, or a pack that looks wrong for your site — raise it in your group chat before the night, not on the doorstep.

```check
q: How do you prove a PED takes payment during testing?
type: single
- [x] A small payment on your own contactless card — the minimum needed, around 50p — refunded on a wired PED before testing is finished. :: Right. Bring a personal contactless card — without one you cannot finish the PED testing. Every test transaction is refunded before you leave.
- [ ] A test card is included in the site delivery. :: No test cards are supplied. The agreed method is your own contactless card, around 50p, refunded before you finish.
- [ ] Ask the manager to lend you a card in the morning. :: Testing happens overnight, before the manager returns. The card is yours, and it is on the list of things you must bring.
- [ ] You do not — PED testing is done remotely. :: PED testing is done by you, on site, with a real payment on your own card.
```

```check
q: Which of these do you bring yourself, and which is already at the site? Pick the correct pairing.
type: single
- [ ] Bring: splitter box. Already on site: drill. :: Other way round. The splitter box arrives with the site delivery days before; the tools to fit it are yours.
- [x] Bring: drill and hand tools. Already on site: splitter box, printer, leads and paper. :: Right. The kit was delivered three to five days ahead; you bring the tools, your phone and your card.
- [ ] Everything is delivered to site, including tools. :: Tools are not delivered. Hand tools and a drill/driver are on your bring list.
- [ ] You bring everything, including the kitchen printer. :: The printer, PSUs, paper, splitter boxes and leads are delivered to site in advance. Your first job is to find and check that delivery.
```

```check
q: Where are the login details for the site's systems?
type: single
- [ ] In this course, in Module 7. :: Deliberately not. Nothing sensitive is published in this course — it is on the open internet.
- [x] In your site pack. :: Right. Credentials, hostnames and site contacts all live in the site pack, which is issued to you once you are rostered.
- [ ] The manager has them. :: The manager runs the restaurant, not the migration. Your login details are in your site pack.
- [ ] You phone your lead engineer for them on the night. :: There are no phone calls on the night, and your lead should not be a lookup service — the details are in your site pack.
```

## Module 3: Arrival

### The site is still open when you get there

You arrive at 20:30 and the restaurant will still be trading. That is expected. Check in with the hotel first and get a contractor card, sign in as your site pack directs, scan your site QR code and check in **Arrived on site**, then find the restaurant duty manager, introduce yourself, and complete your risk assessment before you start anything. While the site is still open, walk it: find every till and every T&A clock, so nothing surprises you later.

Do the evening handover with the manager before the team leaves:

- Confirm what is happening tonight and when the restaurant will close.
- Confirm end of day will be run after close — nothing can start until it is (Module 4).
- Agree the safe location where the de-installed kit will be boxed and left for tomorrow's courier.
- Find the kit delivery and check it against your site pack.
- Confirm how you get out, and how the building is secured, once the team has gone.

The manager and team will cash up and go home. From then on the restaurant is yours until the manager returns at 06:30 — but you are not strictly alone in the building: the hotel has staff working all night, and they are there if anything urgent is needed.

### Conduct — you are inside a trading hotel

The restaurant is closing, but the hotel above it is full of sleeping guests, all night. Be quiet, be tidy, and keep noisy work — drilling for the 4-way box, if its position needs a drill rather than a stick pad — as early in the night as you can. The restaurant staff around you at the start of the night may be working their final shifts under the brand; be sensitive about what this project is.

### Working alone

- Report your arrival, and the key milestones of the night, in your group chat.
- Stay reachable — your phone is your lifeline and the only route anyone has to you.
- If you are unwell, or you have to leave the site for any reason, tell your group chat first.

!! Never leave a site without telling your coordinator — not even briefly, not even at 4am. A silent empty site is treated as an emergency.

```check
q: You arrive at 20:30 and the restaurant is full of diners. What do you do?
type: single
- [x] Sign in, find the duty manager, do the evening handover, and locate the kit delivery — work starts after close and end of day. :: Right. The evening is for handover and preparation. The technical work cannot start until the restaurant has closed and end of day is done.
- [ ] Wait outside until the restaurant closes. :: No — the evening is useful. Sign in, do the handover with the manager, agree the kit location and check the delivery while the team is still there.
- [ ] Start de-installing the surplus tills quietly. :: Nothing gets touched while the site is trading. The site must close and complete end of day first.
- [ ] Come back at midnight. :: You arrive at 20:30 for a reason: the evening handover with the manager has to happen before the team cashes up and leaves.
```

```check
q: Why does the drilling for the splitter box belong early in the night?
type: single
- [ ] Because the drill's battery will run out later. :: The reason is the people asleep upstairs, not the battery.
- [x] Because the hotel above you is full of sleeping guests, and noise carries at night. :: Right. The restaurant is closed but the hotel is trading all night. Keep noisy work as early as you can, and keep everything else quiet and tidy.
- [ ] Because the splitter must be fitted before end of day is run. :: End of day is the site team's task at close and does not depend on your drilling. The reason for drilling early is noise — guests are sleeping above you.
- [ ] It does not matter when the noisy work happens. :: It matters. A noise complaint from a hotel guest reaches the client by breakfast.
```

```check
q: At 3am you feel too unwell to carry on. What do you do first?
type: single
- [ ] Lock up as best you can and go home — it cannot be helped. :: Never leave a site without telling your coordinator. Tell your group chat first, every time.
- [x] Tell your group chat, so your coordinator knows and can stand in cover. :: Right. Coordinators hold contingency engineers for exactly this. Say what state the site is in and wait for instructions if you safely can.
- [ ] Phone the manager at home. :: The route is your group chat — that is where your coordinator is, and they hold the contingency cover. There are no phone calls on the night.
- [ ] Push through and say nothing. :: Do not work on unwell and silent. Tell the group chat; a contingency engineer can take the site over.
```

## Module 4: Pre-requisites

Everything in this module happens after the restaurant has closed, and everything in it must be done before the migration script can start. The script's own first prompt asks you to confirm this list is complete — and you answer it honestly.

### Confirm end of day is done

The site team must complete all end-of-day procedures at close:

- Closing stock
- Micros EOD
- WBD

Ask the manager to confirm all three before they leave.

!! If the site has not run end of day, the night cannot start. Raise it in your group chat straight away — your coordinator will get it resolved. Do not attempt any workaround.

### Reboot the Micros server

1. Log on to the Micros server with the account details in your site pack.
2. Confirm you are on the right machine: the hostname is shown on the desktop — check it matches the Micros server name in your site pack.
3. Reboot the server.

### Check the MPZ files are present

Still on the Micros server, confirm the migration files are there before anything else depends on them:

1. Open File Explorer and go to **D:\Micros\RES\EM\Transport\Receive**.
2. Confirm both files for your site's new EM ID are present — a **.KEY** file and a **.MPZ** file. The EM ID to look for is in your task notes.

!! Missing or wrongly named MPZ files — raise it to the project team straight away. The migration cannot run without them.

### Remove the bolted-down cash drawers

Cash drawers that are not bolted down come out later, at the de-install. Bolted-down drawers are different: firing a drawer open needs a working till, so they must be dealt with now, before the tills are shut down.

1. Log in to the till with the code in your task notes.
2. Select **Function**, then **No Sale** — the cash drawer opens.
3. Remove the drawer.

Any issues, raise them to the project team.

### Reboot every till and clock

Reboot all tills and all T&A clocks — including the ones that will be de-installed later tonight. After the reboots, everything is on.

### Shut down the KMS — KMS sites only

If your site pack says the site has a Kitchen Management System:

1. On the Micros server, open Start, then Run, and type **mstsc** to open Remote Desktop.
2. Enter the KMS server's hostname from your site pack and connect.
3. Log on with the account named in your site pack.
4. Shut the KMS server down manually.
5. Once the server is down, power off every KMS controller.

The KMS server and controllers come out later, in the de-install (Module 9).

### Mount the 4-way box

The 4-way box (the splitter for the kitchen printer) is mounted now, but not connected — the connecting comes after the script, in Module 6.

- It goes around the position of Till 1, or whichever till your site pack designates.
- Drill it or stick-pad it somewhere accessible but away from liquids and likely spillages — behind the cash drawer and the side of the till enclosure compartment are common spots.
- If you are drilling, do it as early as you can — hotel guests are asleep upstairs.
- Any issues or queries, raise them to the project team.

### Ready to move on

End of day confirmed. Micros server rebooted and MPZ files present. Bolted-down cash drawers fired and removed. Every till and clock rebooted and on. KMS shut down at KMS sites. The 4-way box mounted. The PED configs were already checked before close (Module 5). Scan your site QR code and check in **Pre-reqs complete** — now, and only now, the script can begin.

```check
q: The manager is leaving and mentions they have not run end of day — "you can sort that, can't you?" What happens?
type: single
- [ ] You run end of day yourself from the Micros server. :: End of day is the site's procedure, not yours. If it has not been run, raise it in your group chat — your coordinator gets it resolved.
- [x] The night cannot start. Raise it in your group chat before the manager leaves. :: Right. Nothing can begin until closing stock, Micros EOD and WBD are done. Raise it immediately — and it is far easier resolved while the manager is still in the building.
- [ ] Skip it and start the script — you can catch up later. :: The script's first prompt asks you to confirm the pre-requisites are complete. Answering yes when they are not is how a site fails to open in the morning.
- [ ] Wait until 06:30 and ask the manager to run it then. :: That loses the whole night. It gets raised the moment you know, in your group chat.
```

```check
q: Which tills and clocks get rebooted during the pre-requisites?
type: single
- [x] All of them — including the tills and clocks that will be de-installed later tonight. :: Right. Everything reboots and everything is on. The ones being removed still take part in Prepare.
- [ ] Only Till 1 and Till 2, since the rest are being removed. :: All tills and all T&A clocks are rebooted, even the ones being de-installed later. They are still part of the system until after the script has run.
- [ ] None — the tills stay off until after Migrate. :: The tills are off for Migrate, but that comes later. For the pre-requisites and Prepare, everything is rebooted and on.
- [ ] Just the ones that look switched off. :: The instruction is all of them, rebooted, deliberately — not a visual check.
```

```check
q: How do you confirm you are working on the Micros server and not some other machine?
type: single
- [ ] It is the biggest computer in the office. :: Size tells you nothing. The hostname on the desktop, checked against your site pack, tells you exactly which machine you are on.
- [x] The hostname shown on the desktop matches the Micros server name in your site pack. :: Right. Check before you reboot anything — rebooting the wrong machine at a live hotel site is a bad start to the night.
- [ ] Your lead engineer confirms it remotely. :: You can confirm it yourself in seconds: the hostname is on the desktop and the correct name is in your site pack.
- [ ] It is the machine that is already logged in. :: Logged-in state proves nothing. Match the desktop hostname against your site pack.
```

## Module 5: PEDs

Four payment devices typically stay at the site and must end the night running as Premier Inn: two wired Ingenico Lane/3000 — usually at tills 1 and 2 — and two wireless PAX A920. Check your site pack to confirm which PEDs stay at your site. Every other PED is being removed — that happens in the de-install (Module 9).

This is one of the first jobs of the night: the PED config check and update happens with the restaurant manager, before the site closes if Whitbread approve it, or around closing time — not after the pre-requisites.

!! PED keys are required for PED work. If the keys are not on site, you cannot de-install or install PEDs — raise it in your group chat and carry on with the rest of the night.

### Check each retained PED

Identify the four PEDs that stay. On each one, check the logo on screen. If it already shows Premier Inn, it is done. If it shows the old restaurant brand, its configuration needs updating.

This is what a correctly configured PED looks like:

![PAX A920 wireless PED showing the Premier Inn logo on screen — the correct configuration after update](assets/ped-a920-correct.jpg)

### Update a wired PED — Lane/3000

1. Press the Menu button.
2. Enter the passcode from your site pack.
3. Select Config.
4. Select Update.
5. Select Config.

The PED should now auto-update and restart.

![Four photos of the Lane/3000 keypad and screen showing the sequence: press the Menu button, select Config, select Update, then select Config](assets/ped-lane3000-steps.jpg)

### Update a wireless PED — PAX A920

1. From the main screen, press the red cross.
2. Press and hold the Planet logo.
3. Enter the passcode from your site pack.
4. Select Config.
5. Select Update.
6. Select Config.

![Six photos of the PAX A920 screen showing the sequence: press the red cross, press and hold the Planet logo, enter the passcode, select Config, select Update, then select Config](assets/ped-a920-steps.jpg)

### After the update

The PED should auto-update, restart and show the Premier Inn logo. If it shows **no configuration update available**, or still shows the old brand, raise it to the project team — it goes to the project office for escalation to Planet, the payment provider. This is not something Celestra can fix remotely. Do not keep re-running the update, and do not experiment with other menus.

```check
q: Which PEDs stay at the site after the cutover?
type: single
- [x] Two wired Lane/3000 and two wireless PAX A920. :: Right. Those four are converted to Premier Inn. Every other PED on site is de-installed.
- [ ] All of them — they just get a new logo. :: No. Only four stay: two wired Lane/3000 and two wireless PAX A920. The rest are removed along with their poles, power packs, dongles and leads.
- [ ] Two wireless PAX A920 only. :: The wired ones stay too: two wired Lane/3000 and two wireless PAX A920.
- [ ] Whichever four are newest. :: The retained devices are specific models — two wired Lane/3000, two wireless PAX A920 — not a judgement call on the night.
```

```check
q: There are no PED keys on site. What does that mean for your night?
type: single
- [ ] Nothing — you can do PED work without the keys. :: You cannot. No keys on site means no PED de-install and no PED install.
- [x] No PED work can be done. Raise it in your group chat and get on with the rest of the night. :: Right. The keys are required. Report it, keep going with everything else, and the follow-up is handled off the back of your report.
- [ ] The night is abandoned. :: The rest of the night still happens — the printer, the script, the testing, the de-install of everything else. Only the PED work stops.
- [ ] Force the PED mounts off carefully. :: Never. No keys, no PED work — raise it and move on.
```

```check
q: You have run the config update on an A920 twice and it still shows the old restaurant logo. What now?
type: single
- [ ] Run it a few more times — third time lucky. :: Repeatedly re-running an update that is not taking is experimenting. Two attempts is enough information: raise it.
- [x] Stop and raise it to the project team — it needs escalating to Planet, the payment provider. :: Right. A config that will not take — or a "no configuration update available" error — goes through the project office to Planet. Celestra cannot fix it remotely.
- [ ] Factory reset the PED. :: Never. That is a payment device — a factory reset creates a far bigger problem than a wrong logo. Raise it.
- [ ] Swap it with one of the PEDs being de-installed. :: The de-installed PEDs are the old estate — they are not spares. Raise it to the project team.
```

## Module 6: Kitchen printer and splitter

With the KMS gone, orders reach the kitchen through a new kitchen printer — an Epson U220B. This install happens **after the migration script has run** (Module 7): the 4-way box was mounted during the pre-requisites, and now you connect it, re-cable the bar with the numbered leads from your pack, and run a new leg to the kitchen.

![The till station at the bar: the till on its stand with the existing receipt printer beside it](assets/till-station.jpg)

### Before you change anything — check tills 1 and 2

Before you cable anything, check every piece of kit on tills 1 and 2 is working: the receipt printer, the PED, the cash drawer and the scanner, on each till. A fault found before you start is the site's problem; one found after, everyone assumes is yours.

!! Any fault on tills 1 or 2 is a show stopper — do not start the install. Scan your site QR code and check in **Issue — need help**, then escalate in your group chat.

All working, no faults? Scan your site QR code and check in **Pre-reqs complete**, then carry on.

### The connectors — six pins, never four

Every printer lead is RJ12, six-pin. Hold each plug to the light and count six gold contacts.

!! No 4-pin telephone leads. They fit the socket, and the printer stays dead. Six gold contacts, or it does not get plugged in.

Your delivered lead kit is five numbered leads, all 2 m, and the numbers follow you through this module: lead 1 is USB-to-RJ12 (till to splitter), leads 2 and 5 are black RJ12-to-RJ12 (receipt printer and kitchen printer), leads 3 and 4 are green RJ45 patch leads, straight not crossover (bar outlet and comms cabinet). Where the bar run is long, a longer green lead is supplied in the pack instead. Lay them out and check them before you start, and carry one known-good RJ12 and RJ45 spare.

### The change — four moves

1. The 4-way box is already mounted from the pre-requisites (Module 4) — around Till 1, or the till your site pack designates.
2. Unplug the old feed lead from the receipt printer — the numbered leads from your pack replace it.
3. Lead 1: USB end into a spare USB port on the till, RJ12 end into splitter jack 1.
4. New leads: jack 2 back to the receipt printer, jack 3 on to the bar outlet.

!! If the receipt printer stops printing after this, the fault is what you just did — not the printer.

### Know the splitter box

Four 8-pin jacks, labelled 1 to 4, left to right, before the splitter leaves the warehouse: 1 is the feed in from the till, 2 the receipt printer, 3 the link to the bar outlet, and 4 is spare — leave it empty. Data only, no power. There is nothing to write and nothing to configure inside — the white punch-down blocks are not used.

!! If a jack label is missing or unreadable, stop and raise it in your group chat — do not guess, and do not relabel anything.

### The route — bar is the 2s, kitchen is the 3s

![Route infographic, five numbered leads across three rooms: at the bar, lead 1 runs from Till 1 into the 4-way splitter, lead 2 from the splitter to receipt printer RP 1's IDN1 port, and lead 3 from the splitter down to the bar outlet Port 2. In the comms cab, lead 4 patches Panel 1 Port 2 to Panel 2 Port 3. In the kitchen, lead 5 runs from the outlet Port 3 to kitchen printer KP 1's IDN1 port](assets/route-infographic.svg)

Five leads, three rooms. The wall outlets and the cabinet are existing cabling — you are only patching them.

1. Lead 1 from the till into splitter jack 1 — USB end in a spare USB port on the till.
2. Lead 2, black RJ12, from jack 2 into the receipt printer's IDN1 port. IDN1, not IDN2 — read the label.
3. Lead 3, green RJ45, from jack 3 into the bar outlet's empty jack, Port 2. The lead already in that outlet is the live till network — do not unplug or move it.
4. Lead 4, in the comms cabinet: patch Panel 1 Port 2 across to Panel 2 Port 3.
5. Lead 5, black RJ12, in the kitchen: from wall Port 3 into the kitchen printer's IDN1. The six-pin plug sits centrally with a gap either side — that is correct, not loose.

The structured runs between the bar outlet, the comms cabinet and the kitchen outlet were cabled in the weeks before the night — you are borrowing them as plain copper. You patch and connect only: no new cable is ever run, and nothing is drilled beyond mounting the splitter. A dead or missing outlet is raised in your group chat, not worked around.

The outlet and patch panel labels were checked at survey, so they should be clear — but the names themselves vary from site to site, so your site pack schematic is the authority on which ports you are patching. If a label is missing or wrong, stop and raise it in your group chat — never guess.

!! The comms cabinet run carries IDN, not Ethernet. Neither port goes anywhere near a switch — patch it to live kit and nothing works. Touch nothing else in that cabinet.

### Site the kitchen printer

Flat, dry and cool — away from the fryer, steam, heat and splash. Cable off the walkway, black mains lead into a 3-pin socket. Site it, load the roll so the paper feeds off the underside of the roll — the wrong way round prints blank — and plug in the PSU. If the position fails these rules, stop and raise it — do not improvise a new position.

> To confirm from the test lab: which mains socket the printer's PSU uses. An addendum comes with your site pack if anything changes.

### Check the dip switches — check only, before you power up

- **Kitchen printer (U220B):** on the back, by the PSU socket, are red dip switches 1 to 7 — all off except **3 on**. On the underside, undo the DSW cover: **DSW1 all off**, and on **DSW2 switch 1, 2 and 3 on**.
- **Receipt printer (TM88):** on the back, by the PSU socket, dip switches 1 to 7 — all off except **4 on**.

This is a check, not a change you should normally need to make — if the switches are wildly different from this, raise it before powering on.

### Restart, then prove it

1. Kitchen printer on first, then restart the till — a running till will not see a new printer until it restarts.
2. Print a receipt at RP 1.
3. Fire a test order through to KP 1.

Do not sign this job off on the receipt printer alone — the kitchen leg is the job. Both printed? Scan your site QR code and check in **Testing passed**.

### Before you move on

Splitter jack labels legible, 1 to 4, with jack 4 left free; patch panel port labels legible at both ends; photograph the splitter and both panels; record completion via your site QR code; every run clipped or tied so nothing hangs where staff work.

### If it does not work

- Kitchen dead, receipt fine: the fault is jack 3 onwards — swap lead 5, then 4, then 3.
- Both dead: the till end — lead 1, the USB port, or the splitter itself.
- Receipt dead, kitchen prints: lead 2 out of jack 2, or the printer itself.
- Was working, now dead: the cabinet has been re-patched — check Port 2 to Port 3.
- Intermittent under load: a trapped or crushed lead — replace it, do not reseat it.

Work back along the numbers. Leave errors on screen, escalate, and never experiment. Still not working? Scan your site QR code and check in **Issue — need help**, then escalate in your group chat.

```check
q: Where does lead 1 — the USB-to-RJ12 lead — connect?
type: single
- [x] USB end into a spare USB port on the till, RJ12 end into splitter jack 1. :: Right. Lead 1 is the feed, and everything else hangs off it. The old feed lead to the receipt printer is replaced by the numbered leads in your pack.
- [ ] Into the receipt printer's IDN1 port. :: The receipt printer gets lead 2, from splitter jack 2 into IDN1. Lead 1 runs from the till to jack 1.
- [ ] From the till into the bar wall outlet. :: The bar outlet takes lead 3, from splitter jack 3. Lead 1 goes from the till into jack 1.
- [ ] It replaces the patch lead in the comms cabinet. :: The cabinet takes lead 4, green RJ45, panel to panel. Lead 1 is the USB-to-RJ12 feed from the till into jack 1.
```

```check
q: A lead in your kit has a plug that fits the printer socket but shows only four gold contacts. What is it, and what do you do?
type: single
- [x] A telephone lead — do not use it. Every printer lead must be RJ12 with six gold contacts. :: Right. Four-pin leads fit, and the printer stays dead. Hold every plug to the light and count six contacts before you run a lead.
- [ ] A fast Ethernet lead — fine for the comms cabinet. :: Ethernet is RJ45, eight pins, and only for the bar-outlet and panel runs. A four-contact plug in a printer socket is a telephone lead, and it will not work.
- [ ] It is fine as long as it clicks in. :: It will click in — that is the trap. Four contacts means the printer stays dead. Six gold contacts or it does not get used.
- [ ] Use it for the kitchen leg only. :: No leg uses it. Printer leads are six-pin RJ12 everywhere.
```

```check
q: In the comms cabinet, why must the patch between Panel 1 Port 2 and Panel 2 Port 3 never go near a switch?
type: single
- [x] The run carries IDN, not Ethernet — patched into live network kit, nothing works. :: Right. You are borrowing the structured cabling as plain copper between the bar and the kitchen. Panel port to panel port, touch nothing else.
- [ ] The switch ports are all full. :: Whether ports are free is irrelevant — this run is IDN, not Ethernet, and it must go panel to panel.
- [ ] Switches are too fast for printers. :: Speed is not the issue. IDN is not Ethernet at all — a switch port is simply the wrong thing to connect it to.
- [ ] It can go to a switch if the panels are full. :: Never. Panel 1 Port 2 to Panel 2 Port 3, nothing else, and nothing else in the cabinet gets touched.
```

## Module 7: The migration script

The migration script does the actual conversion. It runs on the site's Micros server and has three stages, in this order: **Prepare**, **Migrate**, **Post**. You select each stage yourself — nothing runs on its own.

This is the part of the night where the most damage is possible. The rules in this module are not suggestions. If you remember nothing else from this course, remember the golden rules at the end of this page.

### Before you start the script

Every pre-requisite from Module 4 must already be done: end of day completed and confirmed, the Micros server rebooted with the MPZ files present, the bolted-down cash drawers fired and removed, every till and T&A clock rebooted and switched on, the KMS shut down at sites that have one, and the 4-way box mounted.

!! Do not start the script if any pre-requisite is not done. If the site has not run end of day, stop and raise it with your coordinator — the script cannot go ahead until it is done.

### Stage 1 — Prepare

For Prepare, every till and T&A clock must be switched ON.

1. Log on to the Micros server using the account details in your site pack.
2. Open File Explorer and go to **C:\Program Files\Whitbread\Scripts\Migration Scripts**.
3. Right-click the **RBC migration** shortcut and select **Run as administrator**. Make sure it is the shortcut you run — not the PowerShell file sitting in the same folder.
4. Select **Yes** on the User Account Control prompt.
5. Wait. The script takes between 1 and 10 minutes to open. Two windows should appear: **CMTrace** and the **Migration script** window. Move the CMTrace window now, so you can see it alongside the script window — once Migrate is running you cannot click anything to bring it forward.
6. Select **Prepare**.
7. A prompt asks you to confirm a list of actions is complete. Select **Yes** only if every pre-requisite is done. If anything is still outstanding, select **No** — the script window will close, and you finish the pre-requisites before starting again.
8. **Wait for the window saying Prepare is now complete**, then select **OK**. Do not lock the server before that window has appeared — lock it early and Prepare is cut off before it finishes.
9. Lock the Micros server.
10. Shut down every till and every T&A clock — including the ones being de-installed. Hold down the power button on the right of the till to force it to shut down.

Prepare is now complete. Scan your site QR code and check in **Prepare complete**.

### Stage 2 — Migrate

For Migrate, every till and T&A clock must be OFF. The Micros server does the work alone.

1. Log back into the Micros server.
2. Select **Migrate**.
3. Hands off. Wiggle the mouse only, to stop the screensaver starting — nothing else.

!! Once Migrate is running, touch nothing. **Wiggle the mouse only — no clicking.** Do not click, do not close windows, do not restart anything.

> If it looks like it has hung, leave it alone for 15–20 minutes before raising it. Slow is normal. Any real problem raises itself automatically inside the program.

4. When Migrate finishes, select **OK** on the completion prompt.
5. Lock the Micros server.
6. Turn every till and T&A clock back on and let them boot.
7. Scan your site QR code and check in **Migrate complete**.

### The one error that is normal

After Migrate, one error is expected on the tills: **“ISL error File Not Authorized, See 3700d log”**. If you see it, select **OK** and carry on. It needs no escalation.

Any other error is not normal. Leave the message on the screen exactly as it is, and escalate through your group chat. Do not experiment, and do not clear the message.

### Stage 3 — Post

1. Log in to the Micros server and select **Post**.
2. When it finishes, select **OK**. This automatically notifies the support team that the site is complete.
3. Close the Migration window and CMTrace.
4. Log off from the Micros server.
5. Scan your site QR code and check in **POST complete**.

The script is finished. You move on to the kitchen printer install (Module 6), then testing.

### The golden rules

- Every till and clock ON for Prepare. Every till and clock OFF for Migrate.
- Wait for the Prepare-complete confirmation before locking the server.
- Once Migrate is running, wiggle the mouse only — never click.
- Never re-run a script stage that has part-completed. If something stopped halfway, escalate — do not try again.
- If it looks hung, wait 15–20 minutes before raising it.
- Leave error messages on the screen and escalate. Never experiment.

```check
q: You selected Migrate 10 minutes ago and the screen has not changed since. What do you do?
type: single
- [ ] Close the script and run Migrate again. :: Never re-run a part-completed script stage. Re-running Migrate on a half-migrated site is how a site ends up unable to trade.
- [ ] Restart the Micros server. :: Restarting the server mid-Migrate can corrupt the migration. Nothing gets restarted while Migrate is running.
- [x] Nothing — move the mouse to keep the screen awake and give it 15–20 minutes before raising it. :: Correct. The guide is explicit: if it looks hung, leave it 15–20 minutes before raising. Real problems raise themselves inside the program.
- [ ] Message your group chat straight away. :: Not yet. Raising it is right only after you have waited 15–20 minutes. Slow is normal for Migrate.
```

```check
q: The tills have rebooted after Migrate and one shows “ISL error File Not Authorized, See 3700d log”. What do you do?
type: single
- [x] Select OK and carry on — this one error is expected. :: Correct. This is the only expected error after Migrate. OK it and continue. Anything else stays on screen and gets escalated.
- [ ] Leave it on screen and escalate through your group chat. :: That is the rule for every other error — but this specific one is expected. OK it and carry on.
- [ ] Shut the till down and try again. :: No. Never power-cycle to make an error go away. This error is expected; anything else gets escalated with the message still on screen.
- [ ] Re-run Post to clear it. :: No. Script stages are never re-run to fix an error, and this error needs no fixing — it is expected. Select OK.
```

```check
q: You are about to select Migrate. What state should the tills and T&A clocks be in?
type: single
- [ ] All switched on. :: That is the state for Prepare, not Migrate. Selecting Migrate with the tills on is one of the most damaging mistakes on the night.
- [x] All shut down — every till and every clock, including the ones being de-installed. :: Correct. ON for Prepare, OFF for Migrate. You forced them down at the end of Prepare by holding the power button on the right of each till.
- [ ] Only the tills being kept need to be off. :: Every till and every clock goes off — including the ones that will be de-installed later in the night.
- [ ] It does not matter once Prepare has finished. :: It matters. ON for Prepare, OFF for Migrate is the first golden rule of the night.
```

## Module 8: Testing

Testing is how you prove the site can trade in the morning. You run it on every cutover till and every retained PED, in this order: the printer test, the wired PED test, the wireless PED test, then refund every test payment and void every test order. Keep every receipt, and take the photos where the steps say so — they are your evidence at 06:30.

You sign into the tills with the **site mag card**. If no mag card is assigned, the assignment process is in your task notes — allow ten minutes for a newly assigned card to take.

### The printer test — on each till

1. Log in to the till using the site mag card, followed by the green tick on the keypad.
2. When prompted for allergies, select **YES**.
3. Select **FUNCTION** from the right-hand side menu, then **START TILL**.
4. Confirm the employee assigned to the mag card is shown on the right-hand side of the screen, then select **Cancel**.
5. Ring the test order: **DRINK** from the left-hand menu, then **Coke LRG**; then **FOOD**, then **Chicken Goujons, Chicken Makhani and Chocolate Brownie**.
6. With all four items on, select **PAY**, enter table number **99** on the keypad, select **ENTER**, then **SEND**.

![Till screenshot of a test order containing chicken goujons, chicken makhani, a chocolate brownie and a large Coca-Cola — the four test items rung before PAY, table 99 and SEND](assets/till-test-order.jpg)

Now check the kitchen: there should be **three tickets** — a starter ticket with the goujons, a mains ticket with the makhani, and a desserts ticket with the brownie. The drinks dispense and receipt printers print their parts too. Three tickets in the kitchen is what proves the new printer leg end to end.

### The wired PED test — each wired PED, around 50p

Pay only the minimum needed — around 50p per test.

1. Sign back into the till with the mag card and select **Begin Table** from the right-hand menu. Enter table **7**.
2. Select **Drink**, then **Dashes**, then **Blackcurrant**, then **Send**.
3. Sign back in, select **Pickup Table**, select table 7, then **Pay**.
4. Select **Card Payment** — the payment pushes through to the wired PED.
5. Photograph the PED showing the payment, then pay with your own contactless card.
6. If the cash drawer has opened, close it.

### The wireless PED test — each wireless PED, around 50p

1. Begin Table as before, table **97**, one blackcurrant dash, **Send**.
2. On the wireless PED, swipe the mag card and enter the table number you used.
3. The order and total appear — select the total, and select **No** to the tip prompt.
4. The PED prompts to pay: photograph it, then pay with your card.

### Refund every test payment — wired PEDs only

Refunds can **only** be done on the wired PEDs. Combine all the test transactions into one refund order if you can — otherwise repeat per item.

1. Sign in with the mag card, select **Begin Table**, table **69**.
2. Select **Drinks**, **Dashes**, **Blackcurrant** — four times, or once per payment being refunded.
3. Highlight the item in the top left corner, select **Void** and **Refund**, then **Pay**, then **Card transaction**.
4. The wired PED pops up with the amount and **REFUND** in bold at the top.
5. Photograph the PED screen, then tap your card to take the refund.

!! Make sure the PED says REFUND before you tap. If it does not, stop and raise it to the project team.

### Void the test orders

For every table still open on the till:

1. Sign in with the mag card and select **Pick Up**, then the table.
2. Highlight each product line in the top left corner, select **Void**, enter the void as **Miskey**, select **Ok**.
3. Once everything is removed, select **Pay** and pay the order as a **cash payment of £0.00**.
4. The cash drawer opens and a receipt prints — keep the receipt, close the drawer.

Testing is now complete. Scan your site QR code and check in **Testing passed**.

### If a test fails

- A printer that will not print: check power, port and patching against your schematic, then raise it to the project team — spares are held by the contingency team.
- A cash drawer not recognised: raise it to the project team.
- Till 1 or Till 2 faulty hardware: raise it straight away — it is logged with the hardware supplier as a priority call, the site can trade on the working till, and there is a pre-agreed process to complete the cutover.

!! Never sign the night off to yourself. A failed test is not "probably fine" — it is raised tonight, while support is awake and watching.

```check
q: What should the kitchen show after the till test order is sent?
type: single
- [ ] One combined ticket listing all four items. :: The categories split: three tickets — starter, mains and desserts — is the pass. One combined ticket is not the expected result.
- [x] Three tickets — starter with the goujons, mains with the makhani, desserts with the brownie. :: Right. Three tickets in the kitchen proves the printer leg and the category routing end to end. The drink prints on the dispense and receipt side.
- [ ] Nothing — the kitchen printer is only for the morning staff. :: The kitchen printer is exactly what is under test. Three tickets, or the test has failed.
- [ ] A receipt for the customer. :: The customer receipt is the receipt printer's job. The kitchen check is three tickets across the three food categories.
```

```check
q: How does the till test order start?
type: single
- [ ] Function, Start Till, then ring the items with no sign-in. :: You cannot ring anything without signing in. Mag card and green tick first, allergies YES, then the Start Till check, then the items.
- [ ] Sign in as the manager. :: You use the site mag card, not anyone's personal sign-in.
- [x] Sign in with the site mag card and the green tick, answer YES to allergies, then Function and Start Till to confirm the assigned employee shows. :: Right. Then ring Coke LRG plus the goujons, makhani and brownie, PAY, table 99, ENTER, SEND.
- [ ] Ask first line to put the till in test mode. :: There is no remote test mode. Mag card, green tick, allergies YES, Start Till check, then the order.
```

```check
q: Where do the refunds of your test payments happen?
type: single
- [ ] On whichever PED took the payment. :: The wireless PEDs cannot process the refund. Every refund goes through a wired PED.
- [ ] At the bank, a few days later. :: The refunds happen on site, before testing is finished — that is why you pay only around 50p per test.
- [x] On a wired PED only — and the PED must say REFUND in bold before you tap your card. :: Right. Combine the test payments into one refund order if you can, check for REFUND at the top of the PED, photograph it, then tap.
- [ ] Refunds are not needed for test payments. :: Every test payment is refunded. Wired PED, REFUND showing, photo, tap.
```

## Module 9: De-install and kit recovery

The de-install happens after the migration and testing. Your site pack lists exactly what comes out at your site — the list varies by brand and by what the site has.

### Two piles — reuse and WEEE. Pack them separately.

**Kit that will be reused** — this goes in its own boxes, never mixed with the disposal kit:

- Surplus wireless PEDs with their chargers, and surplus wired PEDs — into the PED bags Celestra provide.

**Kit for WEEE disposal:**

- The host stand and its device and peripherals — check your site pack for confirmation.
- The restaurant printer, unless your site pack says it is being moved.
- Each till being removed comes out with its PSU, its printer and printer PSU, its cash drawer, its PED stand and cables, and its patch leads.
- At KMS sites: every KMS controller, and the KMS server with its power lead from the comms cabinet. **The kitchen screens and their brackets stay on the wall.**

De-installed PEDs are payment devices: handle and record them exactly as briefed. Never leave one unaccounted for.

### What must stay

The retained kit from Module 1 — Tills 1 and 2, the four PEDs, the two bar printers — plus at least one cash drawer, the wireless access points, and anything else the site needs to keep trading. If you are unsure whether something comes out, your site pack is the answer; if it is not on the removal list, it stays.

### Record, box, photograph

1. Record the serial number of every item you remove, in iAuditor as you go.
2. Box the kit — packaging is on site ready.
3. Write the Celestra reference on every box.
4. Put the boxes in the safe location you agreed with the manager at the evening handover.
5. Count the boxes, photograph them in place, and send the photo to the project team in your group chat.

A courier collects the boxes the next day. The photo and box count are what the collection is scheduled from — no photo, no collection.

When the de-install is done and the boxes are photographed in place, scan your site QR code and check in **De-installs complete**.

```check
q: What gets written on every box of de-installed kit?
type: single
- [x] The Celestra reference. :: Right. The reference ties the boxes to the site for the courier collection the next day.
- [ ] Your name and phone number. :: The boxes are identified by the Celestra reference, not by you.
- [ ] Nothing — the courier knows what to take. :: The courier is scheduled from the box count and photo, and finds the right boxes by the Celestra reference written on them.
- [ ] "IT equipment — fragile". :: What matters is the Celestra reference. That is what connects the boxes to the site and the collection.
```

```check
q: Where do the serial numbers of removed kit get recorded?
type: single
- [ ] On a sticky note inside the top box. :: Serials are recorded in iAuditor, as you remove each item — that is the record the project relies on.
- [x] In iAuditor, item by item as you de-install. :: Right. Every removed item's serial goes into your iAuditor report as you go — not from memory at 06:00.
- [ ] Only PED serials need recording. :: Every item you remove has its serial recorded. PEDs additionally get handled exactly as briefed, because they are payment devices.
- [ ] The courier records them at collection. :: The record is yours, made at de-install in iAuditor. The courier collects boxes, not serial numbers.
```

```check
q: Which of these must NOT go in the boxes?
type: single
- [ ] The KMS controllers. :: KMS kit comes out at KMS sites — server and controllers both.
- [ ] Surplus PED poles and power packs. :: Those go — surplus PEDs come out with their poles, packs, dongles, leads and plates.
- [x] The last cash drawer and the wireless access points. :: Right. At least one cash drawer stays, the access points stay, and everything the site needs to trade stays. Not on the removal list means it stays.
- [ ] The host stand laptop. :: The host stand PC or laptop with its peripherals is on the removal list.
```

## Module 10: Evidence and the morning handover

The night is not finished when the work is finished. It is finished when the evidence is complete and the site is handed back. The evidence is what gets the site accepted — with or without a manager present.

### iAuditor — fill it in as you go

Your iAuditor report is the formal record of the night, and access is set up for you before your first shift. Complete it as you do the work, not from memory at 06:00: the pre-requisites, the script stages, the test results, the de-install serials, the photos.

The photos that must be in your evidence:

- The boxed kit in its safe location (Module 9).
- The installed kitchen printer in position.
- The PED screens photographed during the payment and refund tests (Module 8).
- Anything your briefing or site pack adds for your site.

Keep the test receipts (Module 8) together — they back the report.

### The 06:30 handover

The manager returns at 06:30. Walk them through the site: the tills working, the printers printing, the PEDs taking payment — show the test evidence, and get the joint sign-off.

### If there is no manager at 06:30

It happens — do not just wait on the door, and do not just leave:

1. Make sure your iAuditor evidence is complete and submitted, receipts photographed.
2. Tell your coordinator in your group chat.
3. The site is deemed accepted on your evidence, and your coordinator confirms you are released.

!! You leave a site in one of two ways: signed off by the manager, or released by your coordinator with your evidence submitted. There is no third way.

Anything unresolved from the night is already in your group chat — that is how the day team picks it up at their 06:30 handover. When you are released, leave the site secure as agreed at the evening handover, sign out, and make the last scan of the night on your site QR code: check in **Signed off and off site**.

```check
q: When do you fill in the iAuditor report?
type: single
- [x] Through the night, as you complete each part of the work. :: Right. Serials at de-install, results at testing, photos as you take them. A report built at 06:00 from memory is how evidence gets lost.
- [ ] At 06:00, once everything is done. :: Too late and from memory. The report is built as you go, all night.
- [ ] The next day, once you have slept. :: The site is deemed accepted on your evidence at 06:30 — the report must be complete before you leave.
- [ ] Your lead engineer fills it in for the group. :: The report is yours, per site, built by you as you do the work.
```

```check
q: It is 06:40 and no manager has arrived. What do you do?
type: single
- [ ] Wait at the door until someone turns up. :: Do not wait in silence. Complete your evidence, tell your coordinator, and the site is deemed accepted on what you have submitted.
- [ ] Lock up and go home — your shift ended at 06:30. :: Never. You leave signed off by the manager or released by your coordinator — no third way.
- [x] Confirm your iAuditor evidence is complete and submitted, tell your coordinator, and wait to be released. :: Right. The evidence is the sign-off when the manager is unavailable, and the coordinator confirms your release.
- [ ] Phone the manager at home for a verbal sign-off. :: No phone calls — and no chasing managers. Evidence submitted, coordinator told, release confirmed.
```

```check
q: What does the 06:30 walkthrough with the manager cover?
type: single
- [x] Tills working, printers printing, PEDs taking payment — shown working, with the test evidence, for joint sign-off. :: Right. The manager sees the site can trade, sees the evidence, and signs it off jointly with you.
- [ ] A tour of where the boxes are. :: The kit location gets mentioned, but the sign-off is about the site trading: tills, printers, PEDs, shown working with the evidence.
- [ ] Handing over the site keys. :: Site security is as agreed at the evening handover. The 06:30 walkthrough is about proving the site can trade.
- [ ] An hour of training on the new tills. :: You demonstrate the site works. Till training for staff is not part of the engineer's night.
```

## Module 11: When things go wrong

Something will go wrong somewhere on every cutover night, across hundreds of sites. The plan expects it. What the plan cannot survive is engineers who experiment, or who go quiet.

### The rules that never change

- Raise everything via your site QR code. The moment something stops you, check in **Issue — need help** — that flags your site to the project team even before you have typed a word.
- If you are stuck for about ten minutes, escalate. Asking early is professional; struggling in silence is not.
- Leave error messages on the screen exactly as they are.
- Never re-run a part-completed script stage. Never power-cycle to "see if it clears".
- Everything goes through your Teams and WhatsApp groups. No phone calls — hundreds of sites are running at once, and the group chat is the record of the night.
- Never leave a site without telling your coordinator.

### The route

1. **Scan your site QR code and check in "Issue — need help".** Do this first, for anything that stops you — it puts your site on the project team's board immediately.
2. **Raise the detail with the project team in your group chat:** the site number, the exact error on the screen, and what you have already tried.
3. **The project team route it from there** — remote support for config and script triage, a priority call to the hardware supplier for dead till hardware, the project office to Planet for PED configs, and Whitbread platform engineering for build and script faults. You never raise into those tiers directly.

### The side routes

- **Till 1 or Till 2 hardware dead:** the project team log a priority call with the hardware supplier — four-hour response. The site can trade on the working till meanwhile, and there is a pre-agreed process to complete the cutover.
- **PED config will not update, or "no configuration update available":** the project office escalate to Planet, the payment provider. Celestra cannot fix these remotely.
- **Site access, no manager, end of day not run, business decisions:** the project team raise these to Whitbread's Command and Control — engineers never raise these directly.

### The common ones, and where they go

- Script hangs during Migrate: wait 15–20 minutes, wiggle the mouse only, then raise it.
- Build or script failure message: leave it on screen, check in an Issue, raise it to the project team.
- Kitchen printer will not test: power, port, patching against your schematic — then raise it. Spares are held by the contingency team.
- Splitter or socket with no connection through it: check the patching against your schematic, then raise it — swap, don't fight it.
- PED shows the old logo or says no update is available: run the config update from Module 5 once more — still stuck, raise it for escalation to Planet.
- Cash drawer not recognised: raise it to the project team.

```check
q: Something has you stuck. What is your first move?
type: single
- [x] Scan your site QR code and check in "Issue — need help", then raise the detail with the project team in your group chat. :: Right. The QR check-in flags your site immediately; the group chat message carries the detail — site number, exact error, what you tried.
- [ ] Phone the project team. :: No phone calls on the night. The QR check-in and the group chat are the route.
- [ ] Raise it to Whitbread platform engineering. :: Engineers never raise into that tier directly — the project team route build and script faults there.
- [ ] Keep quiet and keep trying until it works. :: Struggling in silence is the one thing the night cannot survive. Ten minutes stuck, escalate.
```

```check
q: Till 2 is hardware-dead — it will not power on at all. What happens?
type: single
- [ ] The night has failed — the site cannot open. :: The site can trade on the working till, the supplier attends on a four-hour priority call, and a pre-agreed process completes the cutover. Raise it and carry on.
- [x] Raise it — the project team log a priority call with the hardware supplier, and the site trades on the working till meanwhile. :: Right. Dead till hardware is a side route: project team to supplier, four-hour response, site trades on the other till.
- [ ] Swap in one of the de-installed tills. :: The removed kit is the old estate, not spares. The route is the priority hardware call via the project team.
- [ ] Open it up and check the fuse. :: You do not repair till hardware on the night. Raise it; the supplier attends on a priority call.
```

```check
q: Who raises an issue into Whitbread platform engineering or to Planet?
type: single
- [ ] Any engineer, if it looks like a build failure. :: Engineers never raise into those tiers directly — the project team route it, with the site number, the exact error and what has been tried.
- [x] The project team — engineers never raise into those tiers directly. :: Right. You check in an Issue and give the project team the detail; they route build and script faults to platform engineering and PED config failures to Planet.
- [ ] Your lead engineer. :: The raise into platform engineering or Planet comes from the project team, not from anyone on site.
- [ ] The site manager. :: The manager is not part of the technical escalation route at all.
```

## Reference card

# Project Rose — night reference

### The night in order

1. 20:30 arrive — check in with the hotel, get a contractor card, sign in, QR check-in "Arrived on site". Evening handover with the manager, agree the kit location, find and check the delivery.
2. Before close (if WHB approve) or around it, with the manager: check the retained PEDs — usually two Lane/3000 at tills 1 and 2, two A920; your site pack confirms. Wrong logo: run the config update (passcode in your site pack). "No configuration update available": raise it — project office to Planet.
3. After close — manager confirms end of day: closing stock, Micros EOD, WBD.
4. Reboot the Micros server (check the hostname against your site pack). Confirm the two MPZ files — .KEY and .MPZ for your EM ID — in D:\Micros\RES\EM\Transport\Receive.
5. Fire and remove the bolted-down cash drawers (Function, No Sale). Reboot every till and T&A clock — all on.
6. KMS sites: shut down the KMS server by Remote Desktop, then power off the controllers.
7. Mount the 4-way box near Till 1, or the designated till — drill or stick pad, drilling early (guests are asleep). QR check-in "Pre-reqs complete".
8. PREPARE — everything ON. Run the RBC migration shortcut as administrator — the shortcut, not the PowerShell. Move CMTrace where you can see it. Wait for the Prepare-complete window, then OK, lock the server, shut down every till and clock. QR check-in "Prepare complete".
9. MIGRATE — everything OFF. Wiggle the mouse only — no clicking. Then OK, lock, turn everything on. "ISL error File Not Authorized" is the one expected error — OK it. QR check-in "Migrate complete".
10. POST — then close the windows and log off. QR check-in "POST complete".
11. Kitchen printer. First check every bit of kit on tills 1 and 2 — any fault is a show stopper: QR check-in "Issue", escalate, do not start. Then connect: lead 1 from a spare till USB port to jack 1, jack 2 to receipt printer IDN1, jack 3 to bar outlet, panels patched, kitchen port to KP 1 IDN1. Dip switches: U220B all off except 3; TM88 all off except 4. Paper feeds off the underside. Printer on first, then restart the till.
12. Test each till: mag card + green tick, allergies YES, Function, Start Till, assigned employee shown, Cancel. Ring Coke LRG + goujons + makhani + brownie, PAY, table 99, SEND — three tickets in the kitchen. Each PED: ~50p on your own card, photo. Refund everything on a wired PED — it must say REFUND. Void the orders as Miskey, pay £0.00 cash. Keep every receipt. QR check-in "Testing passed".
13. De-install per your site pack — reuse kit (PEDs, in the PED bags) packed separately from WEEE kit. Serials into iAuditor. Box, write the Celestra reference, safe location, photo to the project team. QR check-in "De-installs complete".
14. 06:30 — walk the manager through tills, printers, PEDs. Joint sign-off. No manager: evidence complete, tell your coordinator, wait for release. Last scan of the night: QR check-in "Signed off and off site".

### Golden rules

- ON for Prepare. OFF for Migrate.
- Wait for the Prepare-complete window before locking the server.
- During Migrate wiggle the mouse only — no clicking.
- Never re-run a part-completed script stage.
- Looks hung? Wait 15–20 minutes before raising.
- Leave errors on screen. Escalate, never experiment.
- Never leave the site without telling your coordinator.

### When stuck — about 10 minutes, then escalate

1. QR check-in "Issue — need help" — first, for anything that stops you.
2. Project team, in your group chat: site number, exact error on screen, what you tried.
3. They route it — hardware supplier priority calls, Planet for PED configs, Whitbread platform engineering for build and script faults. Never raised by you directly.

Teams and WhatsApp only — no phone calls.

### Do not

- Do not start the script before end of day is confirmed.
- Do not run cables or drill anything beyond mounting the 4-way box.
- Do not lock the Micros server before the Prepare-complete window has appeared.
- Do not use 4-pin telephone leads — six gold contacts on every printer plug.
- Do not patch the printer run into a switch — it is IDN, not Ethernet.
- Do not touch anything in the comms cabinet except your schematic's ports.
- Do not do PED work if there are no PED keys on site — raise it.
- Do not factory reset a PED. Do not power-cycle to clear errors.
- Do not leave without manager sign-off or coordinator release.
