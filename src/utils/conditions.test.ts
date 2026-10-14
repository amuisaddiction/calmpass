import { describe, expect, it } from 'vitest'
import { getConditions } from './conditions'
import { sampleVenue } from '../data/sampleVenue'

describe('getConditions', () => {
  it('returns conditions for every sample room', () => {
    const conditions = getConditions(0)
    expect(Object.keys(conditions)).toHaveLength(sampleVenue.rooms.length)
  })

  it('keeps all levels between 1 and 5', () => {
    for (let timeIndex = 0; timeIndex < sampleVenue.timeStops.length; timeIndex += 1) {
      for (const levels of Object.values(getConditions(timeIndex))) {
        for (const value of Object.values(levels)) {
          expect(value).toBeGreaterThanOrEqual(1)
          expect(value).toBeLessThanOrEqual(5)
          expect(Number.isInteger(value)).toBe(true)
        }
      }
    }
  })

  it('clamps out-of-range time indices to available stops', () => {
    expect(getConditions(-1)).toEqual(getConditions(0))
    expect(getConditions(99)).toEqual(getConditions(4))
  })
})
