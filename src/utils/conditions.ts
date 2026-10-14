import { sampleVenue } from '../data/sampleVenue'
import type { ConditionMap, RoomConditions } from '../types/calmpass'

const clampLevel = (value: number): number => Math.max(1, Math.min(5, Math.round(value)))

/**
 * Return illustrative room conditions for a selected time stop.
 * `timeIndex` is clamped to the available five time stops.
 * These values must never be described as live readings or predictions.
 */
export function getConditions(timeIndex: number): ConditionMap {
  const safeIndex = Math.max(0, Math.min(sampleVenue.timeStops.length - 1, Math.floor(timeIndex)))
  const crowdCurve = sampleVenue.crowdCurve[safeIndex] ?? 1
  const result: ConditionMap = {}

  for (const room of sampleVenue.rooms) {
    const isLunch = safeIndex === 2
    const conditions: RoomConditions = {
      crowd: clampLevel(room.baseline.crowd + crowdCurve - 1),
      noise: clampLevel(room.baseline.noise + room.noiseOffset + (crowdCurve >= 3 ? 1 : 0)),
      light: clampLevel(room.baseline.light + room.lightOffset + (safeIndex === 2 ? 1 : 0)),
      smell: clampLevel(room.baseline.smell + room.smellOffset + (isLunch && room.id === 'service-desk' ? 1 : 0)),
    }
    result[room.id] = conditions
  }

  return result
}
