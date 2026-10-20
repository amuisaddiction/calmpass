# Calmpass

**Know the room before you walk in.**

Calmpass is a sensory-aware venue navigation and visit-planning experience designed to make unfamiliar spaces feel more accessible, predictable, and comfortable. It helps people prepare for unfamiliar public places by exploring a sample venue, comparing illustrative sensory conditions, and creating a simple visit plan.

## Current starter scope

This starter includes:
- A responsive, editorial-style landing page.
- A fictional Harbour Learning Centre floor-plan preview.
- Self-hosted Fraunces and Inter fonts.
- A small sample venue data model and deterministic illustrative condition helper.
- Safe local-storage helpers and a typed state hook for later phases.
- Accessibility foundations, a print stylesheet, and a comprehensive Vitest suite.

The landing page is the current UI scope. Preferences, the interactive explorer, recommendation UI, and visit pass are intentionally not built yet.

## Important data disclosure

**Sample conditions, not live measurements.** The venue and condition levels are fictional demonstration data. They are not live readings, venue-specific facts, or predictions of future conditions. Calmpass is a planning aid and does not promise that a place will be quiet, comfortable, or safe.

## Run locally

Requirements: Node.js 20.19+ or 22.12+ recommended for current Vite releases.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Verify the starter

```bash
npm run build
npm test
```

## Tech stack

- React + TypeScript + Vite
- Tailwind CSS v4 through the official Vite plugin
- Lucide React icons
- Vitest + Testing Library
- Fontsource-hosted Fraunces and Inter fonts

No paid API, backend, account, database, or external map service is required.

## Build plan

1. Foundation and landing page.
2. Sensory preferences with skip-for-now defaults.
3. Interactive SVG floor plan, five-stop time scrubber, room detail panel, and accessible list/table mode.
4. Deterministic recommendation algorithm, comparisons, explanation, and trade-offs.
5. Visit plan and print-friendly visit pass.
6. Accessibility, mobile, tests, documentation, and deployment checks.

See `GEMINI_BUILD_PROMPT.md` for instructions to continue the project in Antigravity/Gemini in small, reviewable batches.
