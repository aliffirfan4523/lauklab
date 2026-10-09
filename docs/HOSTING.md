# Local Firebase Hosting configuration

Approved on 2026-10-09: use the separate `lauklab` Hosting site and serve the landing page through `public/index.html`. The user subsequently approved GitHub Actions CI with automatic site updates on pushes to `main`. DNS edits remain outside that approval.

Read-only Firebase checks confirmed project `chiai-my`, portfolio site `chiai-my` with its existing custom domain, and secondary site `lauklab`. At inspection the secondary site had no releases or custom domains. The portfolio's latest release was 2026-08-19T00:22:12.946Z.

## Local build and test

```sh
npm test
npm run build
firebase emulators:start --only hosting:lauklab --project chiai-my
```

Firebase's Hosting emulator serves only the configured `lauklab` target locally. It does not publish a release. Stop the emulator with Ctrl+C. `npm run preview` also serves the production build locally.

The build generates `public/index.html` and `public/assets/`. Edit the root `index.html` and `src/`; `public/` is generated output and is cleared by Vite during builds. Vite's static-public-directory copying is disabled so the output cannot overwrite itself with Firebase's starter page. Build output and `.firebase/` cache files are ignored by Git.

## Site isolation

`firebase.json` contains only target `lauklab`, serving `public/`. `.firebaserc` maps that target to site `lauklab` in project `chiai-my`. No portfolio target is present in this repository.

## GitHub Actions

One workflow, `.github/workflows/firebase-hosting-merge.yml`, runs Node 24, `npm ci`, `npm test`, and `npm run build`. Pull requests run those checks without publishing. Pushes to `main` publish only after every preceding step succeeds, using project `chiai-my`, target `lauklab`, and channel `live`. A manual run may also publish from `main`; other branches cannot reach the deployment step. Newer runs cancel older runs for the same branch.

Commit and push the source, lockfile, Firebase configuration, workflow, and tests together to activate this configuration in the GitHub repository. The generated `public/` files are ignored; CI rebuilds them.

In GitHub Settings, Actions, General, ensure Actions are enabled and the referenced actions are permitted. Under Secrets and variables, Actions, the repository must have `FIREBASE_SERVICE_ACCOUNT_CHIAI_MY` containing the Firebase service-account JSON with Hosting deployment access to `chiai-my`. Use the secret created by Firebase's GitHub initialization; never commit credentials. Its current presence and permissions have not been verified. This CI configuration does not create cloud credentials or change repository settings.

These commands are examples for later use after explicit publishing approval. They have not been run:

```sh
firebase hosting:channel:deploy review --only lauklab --project chiai-my
firebase deploy --only hosting:lauklab --project chiai-my
```

Do not use unscoped deployment commands. Direct Firebase CLI publishing still requires explicit approval. GitHub pushes to `main` now publish automatically as requested; take this into account before pushing.

## Custom domain

After separate domain-connection approval, open Firebase Console, project `chiai-my`, Hosting site `lauklab`, and choose Add custom domain for the separately approved destination. Use only the exact DNS records Firebase supplies. Make approved additions in Cloudflare, preserving portfolio and email records and existing nameservers. No DNS values or verification tokens have been guessed. Keep the canonical URL unset until the approved domain is serving correctly.

The sites have separate content, configuration, domains, and release history. Hosting quotas remain shared at the Firebase project level; this change adds no billing plan, backend, or paid infrastructure.

References: [Firebase multisite targets](https://firebase.google.com/docs/hosting/multisites), [custom domains](https://firebase.google.com/docs/hosting/custom-domain), [shared quotas](https://firebase.google.com/docs/hosting/usage-quotas-pricing).
