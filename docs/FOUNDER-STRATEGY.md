# LaukLab founder strategy

Prepared 9 October 2026. This plan uses the user's scenario of a one-year, self-funded startup. It does not establish the project's founding date, company registration, funding, traction, or trademark availability.

Build the product around one practical promise: **Find a meal using the food you have.** Earn repeat use by helping someone choose and cook dinner with clear quantities and little setup. More screens and a larger feature list are useful only when they remove a recurring obstacle.

## Audience and positioning to test

The proposed first audience is Malaysian home cooks preparing everyday meals for one or two people, including younger and older adults. Familiar meals, an English interface, and Malay/English ingredient entry are hypotheses about usefulness. They need evidence from cooking sessions, not an assumption that all Malaysian cooks have the same habits.

Ask whether people struggle most with deciding dinner, understanding quantities, buying extras, or maintaining inventory. The first release should solve the strongest observed problem. Do not describe local recipes or bilingual entry as unique until a fuller market comparison supports that claim.

Pantry search and planning already exist in established products:

| Evidence from official product pages | Decision for LaukLab |
| --- | --- |
| [SuperCook's developer listing](https://play.google.com/store/apps/details?id=com.supercook.app) describes recipes based on owned ingredients. | Pantry search needs a clearer reason to choose LaukLab. |
| [Samsung Food's inventory guide](https://support.samsungfood.com/hc/en-us/articles/30025317487508-Getting-Started-with-Food-List) describes manual/camera entry, shopping transfers, and suggested pantry deductions. | Camera input and inventory updates are existing patterns, not evidence of differentiation. |
| [SideChef's FAQ](https://www.sidechef.com/faq/) describes ingredient/time filters, guided recipes, saving, planning, and grocery lists. | Adding all these features will not establish a focused identity. |

The proposed advantage is reliable matching for familiar meals: explicit staples, correct quantities, understandable gaps, reviewed substitutions, and a pantry that is easy to keep current. Tested recipes and corrected ingredient interpretations could become useful operating knowledge. This is an opportunity to earn; it is not a proven competitive advantage.

## What exists and what should ship first

The landing page explains the project through three fixed alternatives. Its required label remains **Illustrative preview — sample data, not live AI.** The recipes are not professionally tested. [Project context](PROJECT.md) records the existing demonstration.

The separate mobile browser prototype covers the full designed journey, including guest setup, Cook, Pantry, Saved, cooking, Plan, List, preferences, and account/sync states. Design coverage is not a release commitment. Real accounts, backup/sync, live AI, persistent offline storage, and background notifications are not implemented services. Prototype timers demonstrate interaction states and do not establish background reliability or cooking doneness.

| Priority | Product scope | Evidence needed |
| --- | --- | --- |
| First usable release | Guest start; reviewed ingredient names, quantities and units; confirmed staples; deterministic curated matching; available/short/extra ingredient states; readable instructions; save/repeat; reviewed pantry deductions; useful recovery. | Users can find and cook a viable meal independently. Ingredient arithmetic, retained drafts, and deductions pass their checks. |
| Next, if requested repeatedly | More tested local recipes, supported substitutions, preferences, shopping shortages, and simple weekly reuse. | Cooking sessions show a repeated gap; the proposed feature removes it. |
| Later, after a demonstrated need | Optional backup/sync, shared household pantry/list, and more elaborate planning. | People need another device or person, accept account setup, and can recover safely from conflicting data. |
| Deferred | Social feed, streaks, grocery delivery integrations, broad nutrition advice, autonomous recipe invention, and elaborate camera inventory. | A recurring problem justifies the extra maintenance, support, and integration work. |

Keep the designed Cook, Pantry, Saved, Plan, and List navigation consistent. Teach the dinner loop first; Plan and List do not need to appear in first-run instructions. A release can expose those follow-ups when they work without requiring them to use Cook.

Curated recipe data should determine quantities and eligibility. AI can assist with ingredient language and explain a grounded match. Uncertain input needs review. When interpretation is unavailable, users need a useful manual/curated path. Do not make a recipe depend on an AI service merely to appear modern.

## App, onboarding, and landing-page decisions

Use the existing warm cream, green, and restrained orange direction. [Design direction](../DESIGN.md) records the light/dark tokens and their purposes. Keep layout, labels, and actions consistent between themes; dark mode is a contrast system, not a different flow. Follow the system preference by default and offer explicit System, Light, and Dark choices.

Use readable text, visible focus, labelled controls, and sufficiently large targets. Support text enlargement, safe areas, and reduced motion. Platform guidance supports adaptable layouts and generous targets: [Apple layout guidance](https://developer.apple.com/design/human-interface-guidelines/layout) and [Android touch-target guidance](https://support.google.com/accessibility/android/answer/7101858?hl=en). Browser checks do not certify native accessibility. Test real devices and assistive technology before a native release.

Start as a guest or explore the labelled sample. For real pantry setup, ask for food relevant to the next meal rather than a complete kitchen inventory. Provide common ingredient selections alongside text entry. Review quantities and units, confirm oil/salt explicitly, and make ambiguous input easy to correct.

Ask servings, time, and equipment together with visible, editable defaults. Return up to three useful choices. State why each fits and distinguish insufficient quantity from a completely missing ingredient. Keep cooking instructions focused. Apply pantry changes only after review, with cancellation and recovery.

Offer optional backup after a useful action, such as saving or finishing a meal. Request permissions when their benefit is visible. Avoid an account wall, a long preference survey, or a notification prompt before a person has seen a useful result.

The public page should show the actual decision: ingredients, constraints, alternatives, quantities, and any extra purchases. Preserve the headline "Good meals start with what you already have." While the service is in development, use the truthful action "See the sample meals." The current owner instruction removes external website and email actions while retaining by Chiai branding. Add an early-access action only when a new contact destination is supplied. Do not simulate a successful waitlist submission or advertise installation and live matching before they exist.

## Low-cost acquisition and retention experiments

Run one experiment at a time. Set a founder-time and spending cap before starting. Track useful trials and repeat cooks, not views alone. The counts below are proposals for learning, not existing users, industry benchmarks, or promises.

| Experiment | Smallest useful action | Decision it should inform |
| --- | --- | --- |
| Prototype usability | Two rounds of six cooks, with changes between rounds. Observe the core tasks below. | Can younger/older people and people with access needs understand and recover from the flow? |
| Home-cooking pilot | After a usable release, invite a proposed twenty cooks to try it for two weeks. Ask about actual dinners and failed attempts. | Does the product help people cook and return on another day? |
| Practical dinner demonstrations | Publish a small English/Malay series showing supported ingredients, the result, quantities, and the actual cooking outcome. Use a working trial destination. | Which examples lead to relevant trials and repeat cooks? |
| Community trial | Ask permission to share a useful demo with a relevant community the founder knows. Invite voluntary feedback. | Does this audience have the problem and understand the promise? |
| Recipe sharing | Let a user voluntarily share a recipe/dinner idea once it is usable. Keep private pantry/account details out of the shared material. | Does useful meal sharing bring cooks who also use the product? |

No outreach or publishing is performed by this document. Do not invent community partnerships or endorsements. Use real cooking demonstrations only after the recipe has been cooked; keep the current illustrative sample labelled accordingly.

For retention, make saved meals easy to repeat and pantry changes easy to review. Ask which repeated correction or step makes people stop. Add reminders only after users ask for them or knowingly opt in. Before choosing a pricing model, observe repeat use and discuss which ongoing convenience people value. This document sets no price, revenue forecast, or paid infrastructure requirement.

Store experiments belong later, after distribution and enough traffic. [Google Play's guidance](https://google.play/business/store-listing-experiments/) recommends changing one asset at a time and allowing at least a week for weekday/weekend effects. [Apple's product-page testing guidance](https://developer.apple.com/help/app-store-connect/create-product-page-optimization-tests/overview-of-product-page-optimization) describes screenshot/icon/preview tests and distribution prerequisites. A handful of early visitors cannot establish a reliable winning variant.

## Measures with explicit denominators

Keep sample-demo activity separate from real pantry trials. A consented pilot log is enough for early learning; a new analytics service is not required. Record the minimum information needed and avoid raw pantry text in event logs.

| Measure | Definition |
| --- | --- |
| Independent task success | Participants who complete a specified task without facilitator help / participants who attempt that task. Record help, errors, and recovery separately. |
| Time to a viable recipe | Time from starting real pantry entry to opening a recipe that fits the confirmed quantities and selected constraints. Record abandoned attempts separately rather than excluding them silently. |
| First cook | Participants reporting that they cooked a suggested meal / participants opening a viable recipe. Specify the observation window. |
| Repeat cook | First-cook participants reporting another cook on a different day within the pilot window / first-cook participants with the full window available. |
| Input corrections | Ingredient interpretations changed during review / ingredient interpretations reviewed. Separate name, amount, and unit errors. |
| Recipe problems | Completed-cook reports with a quantity/instruction problem / completed-cook reports. Record serious failures individually. |
| Channel usefulness | Relevant participants reporting a first and repeat cook per acquisition channel, alongside founder hours and any actual spending for that channel. |

"Marked cooked" is self-reported. It does not prove preparation, nutrition, money saved, or food waste reduced. Do not convert a clicked button into a claim about meals served. Establish a baseline before choosing conversion or retention targets.

## Pilot tasks and interview prompts

Recruit by cooking behaviour and access needs, not age alone. Include younger and older adults, differing digital confidence, English/Malay ingredient habits, and people who use enlarged text or assistive technology. Provide accessible sessions and obtain consent for notes or recording. [GOV.UK's research planning guidance](https://www.gov.uk/service-manual/user-research/plan-user-research-for-your-service) supports small repeated qualitative rounds and varied participants; these rounds are not statistically representative market research.

Use realistic tasks without teaching the interface first:

1. Start without an account and explain what you expect the sample to do.
2. Add a small pantry using familiar ingredient names. Try "4 telur, 200 g kobis" and an ambiguous amount; review and correct the interpretation.
3. Set servings, time, and equipment, then explain why a meal does or does not fit.
4. Find the difference between short stock and an extra ingredient. Change the amount and check the result.
5. Open instructions, enlarge text, and navigate with the participant's usual input method.
6. Simulate a failure, return to the entered information, and recover without re-entering it.
7. Review deductions, change one amount, and cancel before applying. Explain what will happen to pantry stock.
8. Return on another day and try a saved recipe. Test Plan/List separately when they are release candidates.

After a usable release, observe consenting participants cooking selected recipes in their own setting. Record actual quantities, preparation effort, unclear steps, and timing. Prototype clicks cannot establish cooking success.

Interview prompts should ask about recent behaviour: "Tell me about the last time you did not know what to cook." "What food did you already have?" "How did you choose a recipe?" "Which quantities or words were unclear?" "What would make keeping a pantry list too much work?" "What stopped you using this again?" Avoid asking only whether people like the idea or would download it someday.

## Relative execution plan and release gates

These are sequencing proposals, not announced launch dates. Each stage depends on the evidence from the previous one.

| Stage | Founder work | Gate before moving on |
| --- | --- | --- |
| First research round | Recruit six participants, observe the prototype, record obstacles by task and access need. | Identify the most consequential failures and a concrete correction for each. |
| Next research round | Retest the changes with six participants; cover both themes, enlarged text, and recovery. | Proposed internal usability gate: at least five of six independently complete the core flow; all critical quantity, data-loss, privacy, and access failures are fixed and retested. |
| First usable release | Implement the narrow dinner loop and a curated recipe set used with permission. Record recipe sources and tested quantities; check fallbacks and deductions. | No open critical correctness/recovery failures; real cooking checks completed for the recipes offered as tested; clear limits for anything still illustrative. |
| Two-week cooking pilot | Run the proposed twenty-person trial, track the defined denominators, and interview abandoned attempts. | Evidence of useful cooks and repeat use; understand the main reason people stop. Do not infer product-market fit from the proposed cohort size. |
| Follow-up feature | Choose the most repeated observed problem; trial one solution before broad rollout. | Users complete that new task, arithmetic/recovery checks pass, and the added effort does not obstruct the dinner loop. |

Planning/shopping must aggregate recipe needs before subtracting confirmed stock once, preserve incompatible units for review, and handle occupied slots without silent replacement. Account/sync release needs reviewed guest/account merging, no silent double-counting, and reliable failure recovery. Background timers/notifications need platform testing. No feature advances merely because its screen is designed.

## Claims and remaining evidence

Keep the provisional name, development stage, illustrative recipes, and service limits visible. Ingredient exclusions do not establish allergen safety, halal certification, or medical suitability. Do not claim professionally tested recipes, verified savings, users, ratings, funding, partnerships, startup approval, or launch dates without supporting evidence.

Primary sources were accessed on 9 October 2026. The Samsung inventory guide displays an update date of 15 May 2025. The comparison establishes described features, not a hands-on evaluation of every competitor or proof of regional availability. Audience, priorities, experiment sizes, timing, and gates in this document are recommendations.

No outreach, deployment, DNS change, Figma synchronization, backend integration, or native-device certification is included. Demand, recipe reliability, and repeat use remain to be demonstrated with real users.
