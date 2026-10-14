# Sample conditions and recommendation algorithm

## Current condition derivation

The fictional venue lives in `src/data/sampleVenue.ts`. It contains seven rooms, room baselines, room offsets, five time stops, and a fictional crowd curve.

`getConditions(timeIndex)` in `src/utils/conditions.ts`:
1. Clamps the requested time index to the available time stops.
2. Uses the time-specific crowd curve and room baseline to derive crowd levels.
3. Derives noise from room noise offsets and a small crowd-related adjustment.
4. Derives light from room offsets and a small lunchtime adjustment.
5. Derives smell from room offsets and a small Service Desk lunchtime adjustment.
6. Rounds and clamps every value to an integer from 1 to 5.

These values are illustrative sample data, not live measurements or predictions.

## Planned recommendation formula

Only rooms with `route: true` are included. The Quiet Room is a refuge and the Exit is excluded from route scoring.

For each metric:

`exposure_m = 0.7 * average(route room values) + 0.3 * max(route room values)`

`weight_m = 1 + sensitivity_m`

`discomfort = sum(weight_m * exposure_m) / sum(weight_m)`

`comfort = round((5 - discomfort) / 4 * 100)`

Sensitivity values range from 0 (“Don’t mind”) to 3 (“Very sensitive”). A recommendation must include the reason for the suggested time and disclose that it is based on illustrative sample data, not a prediction.
