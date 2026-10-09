# Project context

**lauklab by Chiai** is an independent cooking project currently in closed beta testing, as confirmed by the owner. It explores a practical question: what can someone cook with the ingredients already available, within their time and equipment limits?

The current website explains the pantry-to-meal proposition, presents the app screens and includes attributed Malaysian kitchen recipes. Public registration is not open. Beta status does not establish recipe-testing outcomes, a production account service or a professionally reviewed catalogue.

The latest owner instruction keeps **by Chiai** branding and removes external website and email references from the current design.

## Current website

The website displays Cook, Pantry and Recipe screen captures in both appearances, bundled with the site. Screen buttons change the selected image; the shared theme control follows the system or an explicit preference.

The first recipes are nasi goreng kampung, mee goreng mamak and bihun goreng, with two servings and preparation-inclusive windows of 35/40/35 minutes. They are LaukLab kitchen versions inspired by linked Che Nom recipes. All pantry quantities and extra ingredients are visible. The starter pantry contains 4 eggs, 400 g cooked rice, 60 g shallots, 20 g garlic, 6 tbsp oil and 1 tsp salt. See RECIPE-SOURCES.md for provenance and adaptation decisions.

The website makes no live AI calls, collects no form submissions and creates no accounts. System/Light/Dark appearance is available; only an optional appearance preference is stored locally.

## Proposed MVP direction

The next useful step is a small pilot built around a curated recipe set used with permission. Record the source and permission for each recipe, and make ingredient amounts and preparation steps consistent enough to compare reliably.

Normalize Malay and English ingredient descriptions into shared ingredient names. Keep quantity handling and recipe matching deterministic so the system can explain which ingredients are available, which are short, and which recipes fit the stated constraints.

AI could help interpret ingredient descriptions and explain the selected matches. That role should support the recipe data and deterministic matching. Any future integration would keep credentials on the server, validate inputs and returned data, set rate and cost limits, use timeouts, and provide a useful fallback when interpretation is unavailable.

The first complete release is intended to cover confirmed pantry quantities, reviewed English/Malay ingredient input, curated meal matching, guided cooking, and saved recipes. The interface starts in English. Planning a week and aggregating a shopping list are later candidates, conditional on repeated use and pilot feedback. This roadmap is a design direction, not a statement that the features are available now.

Pilot the smallest complete flow with a limited group, check whether the suggestions are practical, and use that evidence before broadening the recipe catalogue or product. This is a proposed direction only. No API integration, model/version selection, production architecture, or technology decision is made by this document.

## Public claims and project boundaries

Describe the project at its actual stage. Do not imply a programme partnership, institutional endorsement, or registered-company status. Do not claim the illustrative recipes are professionally tested or that the preview is a live service.

The existing Firebase project `chiai-my` and separate Hosting site/target `lauklab` are configured locally. Any custom-domain connection still requires separate approval. See [hosting instructions](HOSTING.md). This design refinement does not deploy a release, change the existing portfolio, or edit DNS.
