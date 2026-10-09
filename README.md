# lauklab by Chiai

A standalone website for **LaukLab by Chiai**, currently in closed beta testing as confirmed by the owner. The site explains the cooking flow, displays the app screens and includes three Malaysian kitchen recipes. It uses Vue 3, Vite, plain JavaScript, and npm.

**Currently in closed beta testing.** Public registration is not open.

The current page keeps **by Chiai** branding and omits external website and email contact links.

**About us**, **Our approach**, and **Closed beta** explain the independent project, the pantry-first recipe approach, and the current testing focus. Company footer links reach each section and FAQ. Public registration remains closed, with no announced release date. Light-mode paper surfaces use warm cream to match the cookbook direction.

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
| `src/content.js` | Brand, public copy, and the starter pantry and Malaysian kitchen recipes. |
| `src/App.vue` | Page sections, navigation, and FAQ. |
| `src/components/SamplePreview.vue` | Malaysian meal quantities, extra ingredients, source links and expandable steps. |
| `src/components/AppPreview.vue` | Cook/Pantry/Recipe screen controls, theme-matched images and the desktop scroll story. |
| `src/assets/app/` | Six bundled captures of the current app screens, in light and dark appearance. |
| `src/assets/brand/` | Cooking-pot/flask logo master and its smaller transparent web asset. |
| `src/assets/meals/` | Three generated Malaysian food images in WebP format. |
| `src/styles.css` | Base theme plus page styles scoped under `.lauklab-page`, including responsive behavior and motion. |
| `src/theme.js` | Validated System/Light/Dark preference with storage-failure fallback. |
| `vite.config.js` | Build configuration and HTML metadata from the shared content. |
| `index.html` | Editable Vite page shell; builds into `public/index.html`. |
| `firebase.json` / `.firebaserc` | Only target `lauklab`, mapped to site `lauklab` in project `chiai-my`. |
| `DESIGN.md` | Approved visual direction and its reasons. |
| `docs/PLAN.md` | Approved implementation scope and verification intent. |
| `docs/PROJECT.md` | Project context and the proposed MVP direction. |

Keep public copy and recipe data in `src/content.js` so the page and metadata share the same source. No canonical URL is set until the final hosting address is known.

The starter pantry contains 4 eggs, 400 g cooked rice, 60 g shallots, 20 g garlic, 6 tbsp cooking oil and 1 tsp salt. Nasi goreng kampung, mee goreng mamak and bihun goreng use two servings and a frying pan, with preparation-inclusive cooking windows of 35, 40 and 35 minutes. Mee goreng calls for already-boiled potato. Extra ingredients are listed explicitly. Kitchen versions use original English instructions and defined quantities, with links to their Che Nom recipe inspiration; see [recipe sources](docs/RECIPE-SOURCES.md).

The **Explore the app** action opens the on-page screen preview. Cook, Pantry and Recipe buttons select current app captures; System/Light/Dark updates both the site and those images. These assets are bundled with the production build, so the website needs no separate local gallery server.

On wide screens, scrolling the app section holds the phone in view and moves through Cook, Pantry and Recipe. The phone has a subtle perspective change and screen crossfades. Reduced motion, mobile and short viewports use the compact controls without the extended story. This behavior uses browser APIs and CSS, without an animation library.

The complete interactive design is currently served locally at `http://127.0.0.1:4181/`; the 24-screen gallery is at `http://127.0.0.1:4181/gallery.html`. Its source folder is `C:/Users/User/.codex/visualizations/2026/10/08/01a11bd8-7426-79d3-9c52-ba7c11a38109/lauklab-refined`. Run `node serve.cjs` in that folder to reopen it. The website's bundled captures work independently of this server.

Recipe steps, FAQ answers, and the mobile Menu use native `details` controls. The website has no backend, live AI calls, account form, waitlist form, or trackers.

The labelled Theme button group defaults to **System** and also offers **Light** and **Dark**. Local storage keeps only this appearance preference. When storage is blocked, the buttons still work during the visit. System mode responds to operating-system appearance changes. Body and cooking instructions use the browser's normal font size; secondary metadata is at least .875rem. Controls have at least 48px height.

The planned first version focuses on confirmed pantry quantities, reviewed English/Malay ingredient input, curated meal matching, guided cooking, and saved recipes. Weekly planning and combined shopping lists depend on pilot feedback; this page does not provide those features.

## Build and host

`npm run build` generates `public/index.html` and bundled assets in `public/`. Firebase serves that directory at `/`. The root `index.html` is the source; do not edit the generated file or store source assets in `public/`, which Vite clears on each build. The existing portfolio remains separate.

Firebase project `chiai-my` and the separate Hosting site `lauklab` have been verified. Local target `lauklab` maps only to that site. Any custom-domain connection requires separate approval. GitHub Actions tests and builds every pull request. Pushes to `main` automatically publish the successful build to site `lauklab`; pull requests do not publish. See [Hosting instructions](docs/HOSTING.md) for prerequisites and local testing. DNS changes and direct publishing commands still require separate approval.

## Review evidence

See [verification and antislop Delivery Gate](docs/VERIFICATION.md) for commands, results, browser interactions, and remaining limits. Desktop, mobile, recipe-preview, and enlarged-text captures are in [docs/screenshots](docs/screenshots).
