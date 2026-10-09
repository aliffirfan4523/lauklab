# Approved implementation plan

Create a standalone landing page for **lauklab by Chiai** in this repository using Vue 3, Vite, plain JavaScript, and npm. Serve it at `/` on its own eventual hosting destination. The existing Chiai portfolio remains separate.

## Delivery scope

1. Build a responsive page with a clear project introduction, explanation of the idea, illustrative pantry preview, and FAQ.
2. Apply the approved warm cookbook direction: cream `#F7F3E8`, green `#214F3D`, orange `#A74B2A`; Georgia headings; system sans-serif body; ENERGY 2 / RHYTHM 3 / MOTION 1; varied sections and restrained motion.
3. Centralize brand, copy, and sample data in `src/content.js`. Implement the preview in `src/components/SamplePreview.vue`, the page in `src/App.vue`, and styling in `src/styles.css`. Derive HTML metadata through `vite.config.js`.
4. Use native `details` for recipe steps, FAQ, and the mobile Menu. Keep navigation local to the page and omit external website and email contact actions.
5. Include useful README, design, plan, and project-context documents. Provide npm development, test, build, and preview commands.

## Fixed preview

The sample uses 2 servings, a 20-minute limit, and a frying pan. The pantry contains 4 eggs, 200 g cabbage, 100 g onion, 400 g cooked rice, 2 tbsp oil, and 0.5 tsp salt.

- Egg and cabbage fried rice: 18 minutes, no extra ingredients.
- Cabbage omelette with rice: 20 minutes, no extra ingredients.
- Tomato, egg, and cabbage bowls: 20 minutes, plus 2 tomatoes measured by count.

The required label is **Illustrative preview — sample data, not live AI.** State that recipes are not professionally tested.

## Verification intent

Run `npm test` (`node --test`) for meaningful content/data checks and `npm run build` for compilation. Use the local preview to inspect desktop and mobile layouts, keyboard navigation, disclosure controls, focus styles, responsive overflow, the exact sample label, and the absence of removed external contact destinations. Check that the compiled HTML contains the intended metadata and no premature canonical URL.

These are planned checks; this document does not record test results or certify a deployment.

## Original boundaries

The original scope excluded backend, live AI API, accounts, form waitlist, storage, trackers, photography, and generated icons. Later amendments below supersede the appearance-storage and hosting restrictions. Production canonical URL, direct agent publishing, DNS changes, and commits remain outside this refinement.

## Hosting amendment approved 2026-10-09

The user approved local Firebase configuration for the existing separate site `lauklab` in project `chiai-my`, with named target `lauklab`. Build output changes from `dist/` to `public/`, serving `public/index.html` at `/`. Generated GitHub publishing workflows become manual only with an explicit site target and preview/live channels. See `HOSTING.md` for the configuration and scoped commands. This replaces the earlier undecided-hosting boundary; cloud publishing, domain connection, and DNS changes still require separate approval.

## Automatic CI amendment, 2026-10-09

The user approved automatic GitHub Actions updates. A single workflow tests and builds pull requests and pushes to `main`, using Node 24. Successful `main` pushes deploy only target `lauklab` to the live channel; pull requests do not deploy. This supersedes the manual-only workflow restriction. Domain connection, DNS edits, and direct agent publishing remain outside the requested local configuration update.

## Appearance and first-release refinement, 2026-10-09

The new founder brief explicitly requests simple colors, light and dark appearance, clear flows, and usability for younger and older people. System/Light/Dark replaces the original fixed-light direction. Store only the validated optional appearance choice; remain usable when storage access or saving fails. Restore a saved choice before rendering and follow operating-system changes while System is selected.

Keep the supplied headline, fixed three-meal sample, and source limitations. A later owner instruction removes website/email contact actions while keeping by Chiai branding. Use semantic foreground/surface/action tokens so dark appearance preserves contrast. Body and recipe text use 1rem, secondary metadata at least .875rem, and controls at least 48px tall. Remove decorative section labels without removing project status or recipe limitations.

Public plans should describe a focused first version with confirmed pantry quantities, reviewed English/Malay ingredient input, curated recipe matching, guided cooking, and saved recipes. Planning and combined shopping lists remain later candidates after pilot validation. Preserve the separate Firebase configuration and CI workflow without publishing or changing DNS.

Verification adds theme-transition and storage-failure tests, both-theme browser contrast, 320/390/768/1440 reflow, 200% text, native Theme keyboard behavior, and fresh screenshots. Historical evidence stays in `VERIFICATION.md`; append current results separately.

## Branding and contact amendment, 2026-10-09

Keep **by Chiai** branding. Remove external website and email references, portfolio links, email-only feedback and early-access actions, and the Contact navigation destination. No replacement contact address was supplied. The mobile Help screen keeps its disclosures and local return to cooking. This amendment does not change Firebase identifiers, CI, DNS, Git history or the deferred Figma file.

## Closed beta, Malaysian recipes and embedded screens, 2026-10-09

The owner's latest instruction supersedes the original illustrative-preview label, generic recipes and twenty-minute limit. Display "Currently in closed beta testing" in public copy and metadata, without inventing tester counts, results or public registration. Replace the recipe selection with attributed nasi goreng kampung, mee goreng mamak and bihun goreng kitchen versions. Preserve explicit quantities, extra ingredients and medical/dietary limits.

Reuse the existing mobile screens in a self-contained on-page preview with Cook/Pantry/Recipe buttons and light/dark assets. Replace the native theme dropdown with labelled System/Light/Dark buttons. Verify OS following, overrides, persistence, blocked storage, screen selection, keyboard focus, disclosures, navigation, ingredient arithmetic, build assets, contrast and reflow. Firebase/CI/DNS and the deferred Figma file remain outside this change.
