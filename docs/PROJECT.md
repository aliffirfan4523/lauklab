# Project context

**lauklab by Chiai** is an independent project at the pre-MVP stage. It explores a practical question: what can someone cook with the ingredients already available, within their time and equipment limits?

The current deliverable is a public landing page with a fixed example. It is a way to explain the proposition and gather interest by email. It is not evidence that a working cooking assistant, professionally tested recipe catalogue, or production service exists.

Public contact: [aliff@chiai.my](mailto:aliff@chiai.my?subject=lauklab%20by%20Chiai%20-%20early%20access%20interest). Chiai's separate portfolio: [https://chiai.my](https://chiai.my).

## Current demonstration

The sample has 2 servings, a 20-minute limit, and a frying pan. It starts with 4 eggs, 200 g cabbage, 100 g onion, 400 g cooked rice, 2 tbsp oil, and 0.5 tsp salt.

It illustrates three alternatives: an 18-minute egg and cabbage fried rice, a 20-minute cabbage omelette with rice, and 20-minute tomato, egg, and cabbage bowls. The first two need no extras; the tomato option adds 2 tomatoes (250 g).

The page labels this explicitly: **Illustrative preview — sample data, not live AI.** Recipes are not professionally tested. The current site makes no live AI calls and does not collect form submissions or create accounts.

## Proposed MVP direction

The next useful step is a small pilot built around a curated recipe set used with permission. Record the source and permission for each recipe, and make ingredient amounts and preparation steps consistent enough to compare reliably.

Normalize Malay and English ingredient descriptions into shared ingredient names. Keep quantity handling and recipe matching deterministic so the system can explain which ingredients are available, which are short, and which recipes fit the stated constraints.

Claude could help interpret ingredient descriptions and explain the selected matches. That role should support the recipe data and deterministic matching. Any future integration would keep credentials on the server, validate inputs and returned data, set rate and cost limits, use timeouts, and provide a useful fallback when interpretation is unavailable.

Pilot the smallest complete flow with a limited group, check whether the suggestions are practical, and use that evidence before broadening the recipe catalogue or product. This is a proposed direction only. No API integration, model/version selection, production architecture, or technology decision is made by this document.

## Public claims and project boundaries

Describe the project at its actual stage. Do not imply a programme partnership, institutional endorsement, or registered-company status. Do not claim the illustrative recipes are professionally tested or that the preview is a live service.

Hosting is still undecided. Publishing this standalone site must be a separate step after a destination is confirmed; it does not include changing the existing portfolio or DNS.
