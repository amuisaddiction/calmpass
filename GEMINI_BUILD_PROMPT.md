# Instructions for Gemini / Antigravity

You are helping build **Calmpass**, a polished React + TypeScript web app for a UI/UX design hackathon.

## First: inspect before changing

1. Inspect the existing project and read `README.md`, `src/types/calmpass.ts`, `src/data/sampleVenue.ts`, and `src/utils/conditions.ts`.
2. Do not replace the project with a different stack.
3. Keep the current visual system: paper `#F8F6F0`, ink blue `#243B80`, sage `#DCE8D8`, coral `#FF795B`, charcoal `#252923`; Fraunces headings and Inter body text.
4. Preserve responsive layouts, keyboard access, visible focus states, 44px minimum touch targets, and reduced-motion support.
5. Keep the project free to run: no paid APIs, backend, login, database, or external map API.
6. Do not claim that the app has been built or tested unless you actually ran the commands and saw the results.

## Product definition

Calmpass helps people feel more prepared before visiting an unfamiliar public place. The signature feature will be an interactive SVG floor plan for the fictional **Harbour Learning Centre**.

Always disclose: **“Sample conditions, not live measurements.”** Data is illustrative, not live, venue-specific, or predictive. Never promise a place will be quiet, comfortable, or safe. Do not make medical or diagnostic claims.

## Required sample venue

The data model already defines seven rooms:
- Entrance
- Reception
- Main Corridor
- Waiting Area
- Quiet Room
- Service Desk
- Exit

Route rooms for recommendation calculations: Entrance, Reception, Main Corridor, Waiting Area, Service Desk. Quiet Room is a refuge (`route: false`). Exit remains excluded from route scoring unless the product owner explicitly changes that rule.

Five time stops: 9 AM, 11 AM, 1 PM, 3 PM, 5 PM. The fictional crowd curve should be lowest at 9 AM and 5 PM and highest around 1 PM. Conditions must be deterministic, clamped to integer levels 1–5, and clearly labeled illustrative.

## Work in batches

Do only one batch at a time. After completing a batch, report:
- files changed,
- features completed,
- commands actually run and their real results,
- anything still incomplete.

Then stop and wait for the user to say **“next”**. Never silently proceed to another batch.

### Batch A — audit the foundation
Check the current project for missing or incorrect imports, TypeScript issues, responsive problems, and accessibility concerns. Make only essential fixes. Run `npm run build` and `npm test`, then report real output. Do not start building future screens in this batch.

### Batch B — sensory preferences
Create an accessible preferences screen for noise, crowds, lighting, and strong smells. Each sensitivity uses values 0–3: 0 “Don’t mind”, 1 “Slightly sensitive”, 2 “Quite sensitive”, 3 “Very sensitive”. Show labels and current values, use good keyboard controls, and include a “Skip for now” action with sensible defaults. Persist small preferences safely using the existing storage helper.

### Batch C — interactive venue explorer
Create an SVG floor plan that supports mouse and keyboard selection. Rooms need accessible names, visible selected/focus states, and sensory levels conveyed through labels/patterns/marks—not colour alone. Add a native range input with five exact time stops, visible ticks, and `aria-valuetext`. Show selected room details and four numeric metrics. Add an accessible list/table toggle exposing the same information. Respect reduced motion.

### Batch D — deterministic recommendations
Implement and test this exact algorithm. For each time, use route rooms only (`route: true`; exclude Quiet Room and Exit).
For each metric `m` in noise, crowd, light, smell:

`exposure_m = 0.7 * average(route room values) + 0.3 * max(route room values)`

`weight_m = 1 + sensitivity_m`

`discomfort = sum(weight_m * exposure_m) / sum(weight_m)`

`comfort = round((5 - discomfort) / 4 * 100)`

Return comfort and each metric's weighted contribution for every time. The earliest time wins ties. Also calculate the two metrics contributing most to discomfort, the busiest route room, whether any route room at the recommended time has a metric level >= 4 (if so, show a trade-off note), and Quiet Room levels at the recommended time as a refuge. Never move the time control automatically when the recommendation is selected. Say “Based on illustrative sample data, not a prediction.”

Add deterministic tests for:
1. all sensitivities 0,
2. noise sensitivity 3 and others 0,
3. crowd and smell sensitivity 3 and others 0.

Check results stay in range and at least two profiles produce different best times. If not, tune data overrides—not the formula.

### Batch E — visit plan
Let the user choose Waiting Area or Service Desk as the destination, include Quiet Room as an optional refuge, and generate a concise visit story and printable visit pass. Do not promise actual conditions. Add a print action and make print CSS useful.

### Batch F — polish and submit
Check keyboard-only use, focus, screen-reader labels, reduced motion, 375px mobile layout, error handling, build, and tests. Update README with accurate setup/demo instructions and deployment steps. Do not add new dependencies unless necessary and explain any addition first.

## Important implementation rules

- Keep components small and strongly typed.
- Use existing dependencies before adding anything.
- Use `src/data/sampleVenue.ts` as the single source of sample venue truth.
- Use `src/utils/conditions.ts` to derive room conditions. Do not duplicate the calculation in components.
- Use `src/utils/storage.ts` for guarded browser storage.
- No empty placeholder files or non-functional controls.
- Keep navigation and buttons functional.
- Do not add a backend or real-world venue claims.
