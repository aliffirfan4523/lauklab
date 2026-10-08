# Local Firebase Hosting configuration

Approved on 2026-10-09: use the separate `lauklab` Hosting site and serve the landing page through `public/index.html`. This change does not authorize publishing or DNS edits.

Read-only Firebase checks confirmed project `chiai-my`, portfolio site `chiai-my` with active domain `chiai.my`, and secondary site `lauklab`. At inspection the secondary site had no releases or custom domains. The portfolio's latest release was 2026-08-19T00:22:12.946Z.

## Local build and test

```sh
npm test
npm run build
firebase emulators:start --only hosting:lauklab --project chiai-my
```

Firebase's Hosting emulator serves only the configured `lauklab` target locally. It does not publish a release. Stop the emulator with Ctrl+C. `npm run preview` also serves the production build locally.

The build generates `public/index.html` and `public/assets/`. Edit the root `index.html` and `src/`; `public/` is generated output and is cleared by Vite during builds. Vite's static-public-directory copying is disabled so the output cannot overwrite itself with Firebase's starter page. Build output and `.firebase/` cache files are ignored by Git.

## Site isolation

`firebase.json` contains only target `lauklab`, serving `public/`. `.firebaserc` maps that target to site `lauklab` in project `chiai-my`. No portfolio target is present in this repository. The two generated GitHub workflows are manual only and explicitly specify `target: lauklab`; no push or pull-request trigger publishes automatically.

These commands are examples for later use after explicit publishing approval. They have not been run:

```sh
firebase hosting:channel:deploy review --only lauklab --project chiai-my
firebase deploy --only hosting:lauklab --project chiai-my
```

Do not use unscoped deployment commands. A manual GitHub workflow dispatch also publishes and should be used only when that release is approved.

## Custom domain

After separate domain-connection approval, open Firebase Console, project `chiai-my`, Hosting site `lauklab`, and choose Add custom domain for `lauklab.chiai.my`. Use only the exact DNS records Firebase supplies. Make approved additions in Cloudflare, preserving portfolio and email records and existing nameservers. No DNS values or verification tokens have been guessed. Keep the canonical URL unset until the approved domain is serving correctly.

The sites have separate content, configuration, domains, and release history. Hosting quotas remain shared at the Firebase project level; this change adds no billing plan, backend, or paid infrastructure.

References: [Firebase multisite targets](https://firebase.google.com/docs/hosting/multisites), [custom domains](https://firebase.google.com/docs/hosting/custom-domain), [shared quotas](https://firebase.google.com/docs/hosting/usage-quotas-pricing).
