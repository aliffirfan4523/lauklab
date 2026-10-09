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
| `src/theme.js` | Validated System/Light/Dark preference with storage-failure fallback. |
| `vite.config.js` | Build configuration and HTML metadata from the shared content. |
| `index.html` | Editable Vite page shell; builds into `public/index.html`. |
| `firebase.json` / `.firebaserc` | Only target `lauklab`, mapped to site `lauklab` in project `chiai-my`. |
| `DESIGN.md` | Approved visual direction and its reasons. |
| `docs/PLAN.md` | Approved implementation scope and verification intent. |
| `docs/PROJECT.md` | Project context and the proposed MVP direction. |

Keep public copy and sample data in `src/content.js` so the page and metadata share the same source. No canonical URL is set until the final hosting address is known.

The preview is fixed at **2 servings, 20 minutes, and a frying pan**. Its pantry is 4 eggs, 200 g cabbage, 100 g onion, 400 g cooked rice, 2 tbsp oil, and 0.5 tsp salt. The tomato option calls for an extra 2 tomatoes, measured by count rather than an assumed mass conversion.

Recipe steps, FAQ answers, and the mobile Menu use native `details` controls. The site has no backend, live AI calls, accounts, waitlist form, or trackers. The early-access link opens the visitor's email client with the subject `lauklab by Chiai - early access interest`.

The labelled Theme selector defaults to **System** and also offers **Light** and **Dark**. Local storage keeps only this appearance preference. When storage is blocked, the selector still works during the visit. System mode responds to operating-system appearance changes. Body and cooking instructions use the browser's normal font size; secondary metadata is at least .875rem. Controls have at least 48px height.

The planned first version focuses on confirmed pantry quantities, reviewed English/Malay ingredient input, curated meal matching, guided cooking, and saved recipes. Weekly planning and combined shopping lists depend on pilot feedback; this page does not provide those features.

## Build and host

`npm run build` generates `public/index.html` and bundled assets in `public/`. Firebase serves that directory at `/`. The root `index.html` is the source; do not edit the generated file or store source assets in `public/`, which Vite clears on each build. The existing portfolio at `https://chiai.my` remains separate.

Firebase project `chiai-my` and the separate Hosting site `lauklab` have been verified. Local target `lauklab` maps only to that site. The intended custom domain is `lauklab.chiai.my`, pending an approved domain connection. GitHub Actions tests and builds every pull request. Pushes to `main` automatically publish the successful build to site `lauklab`; pull requests do not publish. See [Hosting instructions](docs/HOSTING.md) for prerequisites and local testing. DNS changes and direct publishing commands still require separate approval.

## Review evidence

See [verification and antislop Delivery Gate](docs/VERIFICATION.md) for commands, results, browser interactions, and remaining limits. Desktop, mobile, recipe-preview, and enlarged-text captures are in [docs/screenshots](docs/screenshots).
