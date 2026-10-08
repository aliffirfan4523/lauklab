# Approved implementation plan

Create a standalone landing page for **lauklab by Chiai** in this repository using Vue 3, Vite, plain JavaScript, and npm. Serve it at `/` on its own eventual hosting destination. The existing Chiai portfolio remains separate.

## Delivery scope

1. Build a responsive page with a clear project introduction, explanation of the idea, illustrative pantry preview, FAQ, and early-access email action.
2. Apply the approved warm cookbook direction: cream `#F7F3E8`, green `#214F3D`, orange `#A74B2A`; Georgia headings; system sans-serif body; ENERGY 2 / RHYTHM 3 / MOTION 1; varied sections and restrained motion.
3. Centralize brand, contact, copy, and sample data in `src/content.js`. Implement the preview in `src/components/SamplePreview.vue`, the page in `src/App.vue`, and styling in `src/styles.css`. Derive HTML metadata through `vite.config.js`.
4. Use native `details` for recipe steps, FAQ, and the mobile Menu. Use a `mailto:` link to `aliff@chiai.my` with the encoded subject `lauklab by Chiai - early access interest`. Link the portfolio to `https://chiai.my`.
5. Include useful README, design, plan, and project-context documents. Provide npm development, test, build, and preview commands.

## Fixed preview

The sample uses 2 servings, a 20-minute limit, and a frying pan. The pantry contains 4 eggs, 200 g cabbage, 100 g onion, 400 g cooked rice, 2 tbsp oil, and 0.5 tsp salt.

- Egg and cabbage fried rice: 18 minutes, no extra ingredients.
- Cabbage omelette with rice: 20 minutes, no extra ingredients.
- Tomato, egg, and cabbage bowls: 20 minutes, plus 2 tomatoes (250 g).

The required label is **Illustrative preview — sample data, not live AI.** State that recipes are not professionally tested.

## Verification intent

Run `npm test` (`node --test`) for meaningful content/data checks and `npm run build` for compilation. Use the local preview to inspect desktop and mobile layouts, keyboard navigation, disclosure controls, focus styles, responsive overflow, the exact sample label, and the email link's recipient and subject. Check that the compiled HTML contains the intended metadata and no premature canonical URL.

These are planned checks; this document does not record test results or certify a deployment.

## Boundaries

No backend, live AI API, accounts, form waitlist, storage, trackers, photography, or generated icons. No hosting choice, production canonical URL, remote, push, deployment, or DNS change. Repository intent is local `main` with the work left uncommitted.

## Hosting amendment approved 2026-10-09

The user approved local Firebase configuration for the existing separate site `lauklab` in project `chiai-my`, with named target `lauklab`. Build output changes from `dist/` to `public/`, serving `public/index.html` at `/`. Generated GitHub publishing workflows become manual only with an explicit site target and preview/live channels. See `HOSTING.md` for the configuration and scoped commands. This replaces the earlier undecided-hosting boundary; cloud publishing, domain connection, and DNS changes still require separate approval.
