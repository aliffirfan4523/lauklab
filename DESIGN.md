# Design direction

The approved direction is a warm, readable cookbook page for **lauklab by Chiai**. It should help visitors understand the idea, inspect a concrete sample, and express interest by email.

| Decision | Reason |
| --- | --- |
| Cream `#F7F3E8`, green `#214F3D`, orange `#A74B2A` | Warm paper, grounded text, and a restrained cooking accent. |
| Georgia headings and a system sans-serif body | Familiar editorial character with clear practical instructions and no font download. |
| System, light, and dark appearance | Respects the visitor's environment and lets them choose comfortable contrast. |
| ENERGY 2 / RHYTHM 3 / MOTION 1 | Restrained emphasis, varied section composition, and minimal movement. |
| Varied section layouts | Gives the introduction, explanation, sample, and FAQ their own reading pace. |
| Typography and CSS decoration | Keeps the page complete without photography or generated icons. |
| One actual sample pantry with three alternatives | Makes the proposition understandable through quantities, timings, and missing ingredients. |
| Consistent meal-card fields | Lets visitors compare time, quantities, and missing ingredients before opening the steps. |
| Orange for sample disclosure, missing ingredients, and light-surface focus | Marks the information that needs attention without coloring every section. |
| Native `details` for recipe steps, FAQ, and mobile Menu | Provides simple, accessible disclosure with platform behavior. |
| Email CTA | Lets visitors express interest without adding a collection system. |

## Content and interaction

Use clear section hierarchy, generous spacing, and comfortable line lengths. The primary action leads to the sample meals; the secondary action opens early-access interest by email. Keep Chiai's portfolio link visible without suggesting the portfolio hosts this site.

The sample context is 2 servings, 20 minutes, and a frying pan. Available ingredients are 4 eggs, 200 g cabbage, 100 g onion, 400 g cooked rice, 2 tbsp oil, and 0.5 tsp salt.

| Alternative | Time | Extra ingredients |
| --- | --- | --- |
| Egg and cabbage fried rice | 18 minutes | None |
| Cabbage omelette with rice | 20 minutes | None |
| Tomato, egg, and cabbage bowls | 20 minutes | 2 tomatoes, measured by count |

Display this label exactly: **Illustrative preview — sample data, not live AI.** Explain that the recipes are not professionally tested. The sample must not imply that visitors can submit ingredients or receive live generated recipes.

Use descriptive link text, visible keyboard focus, readable color contrast, and layouts that fit small screens without horizontal scrolling. Honor reduced-motion preferences. Preserve the native disclosure interactions on touch and keyboard.

## Deliberate limits

No backend, AI API integration, account flow, form waitlist, or tracking. Local storage keeps only an optional appearance preference; when storage is unavailable, appearance changes still work during the visit. No stock photography or generated icon set. A canonical URL will be added only after the public address is confirmed.

## Founder-focused refinement, 2026-10-09

The user's request for simple modern colors, light/dark appearance, and usability for younger and older people supersedes the original fixed-light restriction. System is the default; the labelled native Theme selector allows Light and Dark overrides. An early head script restores a validated preference before the page paints. CSS observes operating-system appearance changes while System is selected.

Light keeps the approved cream, green, and orange. Dark uses `#151E19` page, `#1C2921` surface, `#F2F2E9` text, `#B5C4B8` secondary text, `#A8D2B7` green accents, and `#F3B18F` orange accents. Deep-green narrative/contact panels retain cream text in either appearance. Primary action fill and text are separate tokens, so changing headings to pale green does not invert panel or button contrast.

Body and recipe instructions use 1rem; genuine metadata uses at least .875rem. The root follows the browser's default font size. Controls use at least 48px height, including the native Theme selector, links, and recipe disclosures. Decorative section eyebrow labels have been removed, while project-development status and sample limits remain visible.

The first-release proposition is deliberately small: confirmed pantry quantities, curated matches, reviewed English/Malay ingredient input, guided cooking, and saved recipes. Planning and shopping lists remain conditional follow-ups after a home-cook pilot. The three-meal sample remains fixed; it does not submit ingredients or provide live matching. Tomatoes are represented as two items rather than an assumed conversion to grams.
