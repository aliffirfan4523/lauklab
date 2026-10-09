# Design direction

The approved direction is a warm, readable cookbook website for **lauklab by Chiai**. The owner confirms **currently in closed beta testing** and asks for the app screens and familiar Malaysian recipes to be visible on the site. Keep ENERGY 2 / RHYTHM 3. The app retains MOTION 1; the owner's request for Apple-inspired website animation raises the app-preview section to MOTION 2.

| Decision | Reason |
| --- | --- |
| Cream #F7F3E8, green #214F3D, restrained orange #A74B2A | Paper-like reading surface, clear actions and ingredient review cues |
| Georgia headings and system sans body | Cookbook character without external font requests |
| Asymmetric hero, pantry summary, phone preview and varied sections | Give the idea, app and meal comparison their own reading pace |
| Cooking-pot/flask logo beside lowercase wordmark; by Chiai retained | Connect everyday cooking to experimentation, with a cream backing for dark-theme legibility |
| Native disclosures and labelled buttons | Visible, predictable states with keyboard support |
| One scroll-driven phone story on the website; quick feedback in the app | Explain Cook, Pantry and Recipe continuity without repeated page reveals or motion loops |

## Current content and structure

Keep the headline **Good meals start with what you already have.** The main action, **Explore the app**, leads to the on-page screen preview. **Browse Malaysian meals** leads to the recipes. Navigation reaches The idea, The app, Meals, Roadmap and About us. External portfolio/email references remain removed.

Company content expands the existing About section into About us, Our approach, and Closed beta, with a Company footer navigation including FAQ. The About composition pairs a cookbook-style opening with the independent Chiai project identity. Three editorial rows explain pantry confirmation, grounded recipes, and user review. A deep-green beta panel explains the current focus and that public registration is not open. No team, legal company status, statistics, contact channels or launch date is invented.

The app section displays the current Cook, Pantry and Recipe layouts inside a phone frame. Buttons select the screen; the image follows System/Light/Dark. Six captures are local build assets, so the production website has no dependency on a separate gallery server. On wide, sufficiently tall screens with motion enabled, the phone stays in view while scrolling through three task-specific chapters. Images crossfade, and a small change of perspective gives the phone depth. Manual buttons override the current chapter until deliberate scrolling resumes. Mobile, short viewports and reduced motion use the compact button-controlled presentation.

The owner-approved logo is supplied as a transparent raster master and a 256px web asset. Three generated food images show the Malaysian meal types; they are visual appearance cues rather than photographs of professionally tested recipes. Exact generation prompts are stored in docs/brand-logo-prompt.txt and docs/food-image-prompts.txt. WebP encoding keeps each food asset below 320KB. No external fonts or additional libraries are introduced.

The complete mobile prototype uses the logo, shared food crops, quantity blocks, grouped settings and forms, a selected-day planning surface, and shopping progress computed from its existing list state. Cook keeps user-marked priority ingredients above constraints. Recipe details use a shallow food image while retaining ingredient gaps, quantities and attribution. Saved and planned meals reuse compact thumbnails. Pantry and List remain focused on amounts and review, with no decorative photography panels. All 24 routes retain their existing behavior and review steps.

The starter pantry contains four eggs, 400 g cooked rice, 60 g shallots, 20 g garlic, six tablespoons oil and one teaspoon salt. The two-serving recipe selection is nasi goreng kampung, mee goreng mamak and bihun goreng. Their preparation-inclusive windows are 35, 40 and 35 minutes within the 45-minute cooking choice. Mee goreng explicitly uses already-boiled potato. All extra ingredients and sources are visible; recipes are alternative choices rather than meals that can reuse the same pantry stock without deductions.

Recipes are LaukLab kitchen versions inspired by Che Nom, with original English instructions and defined amounts. Source URLs and adaptation details are recorded in docs/RECIPE-SOURCES.md. The owner's new status and meal selection supersede the original generic egg/cabbage example and its public illustrative label. Do not invent tester counts, outcomes, partnerships, certification, public registration or production account/sync services.

## Appearance and accessibility

System is the default. The labelled System/Light/Dark button group uses consistent line icons, visible pressed states and >=48px targets. The saved preference is restored before paint, follows OS appearance while System is selected and remains usable when storage is blocked. Both site and app images follow the choice. Light paper surfaces use warm #F2EDDF against the #F7F3E8 page, replacing the near-white recipe band while retaining quiet tonal separation.

Dark uses #151E19 page, #1C2921 surface, #F2F2E9 text, #B5C4B8 secondary text, #A8D2B7 green accents and #F3B18F orange accents. Action foreground/fill tokens are separate. Deep-green narrative panels retain cream text. Body and recipe instructions use 1rem, metadata at least .875rem, and keyboard focus has a visible 3px outline. Reflow is checked at 320/390/768/1440px and 200% text.

No backend, account service, live AI, deployment, DNS change or deferred Figma edit is part of this website update.
