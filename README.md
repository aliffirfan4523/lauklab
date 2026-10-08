# lauklab by Chiai

A standalone landing page for an independent, pre-MVP cooking project. The current site explains the idea and shows three fixed dinner alternatives from one sample pantry. It uses Vue 3, Vite, plain JavaScript, and npm.

**Illustrative preview — sample data, not live AI.** Recipes are not professionally tested.

Contact: [aliff@chiai.my](mailto:aliff@chiai.my?subject=lauklab%20by%20Chiai%20-%20early%20access%20interest). Portfolio: [chiai.my](https://chiai.my).

## Run locally

Install Node.js and npm, then run these commands from the project directory:

```sh
npm install
npm run dev
```

Open the local URL Vite prints. To check and preview the production build:

```sh
npm test
npm run build
npm run preview
```

`npm test` uses Node's built-in test runner (`node --test`). The preview command serves the built site locally; it does not publish it.

## Edit the site

| File | Purpose |
| --- | --- |
| `src/content.js` | Brand, contact details, public copy, and the fixed pantry/recipe sample. |
| `src/App.vue` | Page sections, navigation, FAQ, and early-access email link. |
| `src/components/SamplePreview.vue` | Pantry preview and expandable recipe steps. |
| `src/styles.css` | Base theme plus page styles scoped under `.lauklab-page`, including responsive behavior and motion. |
| `vite.config.js` | Build configuration and HTML metadata from the shared content. |
| `index.html` | Page shell. |
| `DESIGN.md` | Approved visual direction and its reasons. |
| `docs/PLAN.md` | Approved implementation scope and verification intent. |
| `docs/PROJECT.md` | Project context and the proposed MVP direction. |

Keep public copy and sample data in `src/content.js` so the page and metadata share the same source. No canonical URL is set until the final hosting address is known.

The preview is fixed at **2 servings, 20 minutes, and a frying pan**. Its pantry is 4 eggs, 200 g cabbage, 100 g onion, 400 g cooked rice, 2 tbsp oil, and 0.5 tsp salt. The tomato option calls for an extra 2 tomatoes (250 g).

Recipe steps, FAQ answers, and the mobile Menu use native `details` controls. The site has no backend, live AI calls, accounts, waitlist form, persistent storage, or trackers. The early-access link opens the visitor's email client with the subject `lauklab by Chiai - early access interest`.

## Build and host

`npm run build` creates `dist/`. Serve that directory at the root (`/`) of the site's own hosting destination. The existing portfolio at `https://chiai.my` remains separate.

Hosting is undecided. No remote, push, deployment, or DNS change is part of this work. Confirm the final destination and production URL before publishing or adding a canonical URL.

## Review evidence

See [verification and antislop Delivery Gate](docs/VERIFICATION.md) for commands, results, browser interactions, and remaining limits. Desktop, mobile, recipe-preview, and enlarged-text captures are in [docs/screenshots](docs/screenshots).
