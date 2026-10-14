/** Sensory dimensions shown throughout the venue preview and planning flow. */
export type MetricKey = 'noise' | 'crowd' | 'light' | 'smell'

/** A 1–5 illustrative level for each sensory dimension in a room. */
export interface RoomConditions {
  noise: number
  crowd: number
  light: number
  smell: number
}

/** SVG rectangle geometry used to draw and select a room on the floor plan. */
export interface RoomGeometry {
  x: number
  y: number
  width: number
  height: number
}

/**
 * One room in the sample venue.
 * `route` controls inclusion in route-based calculations.
 * A refuge is a nearby alternative and should not be counted as a route room.
 */
export interface VenueRoom {
  id: string
  name: string
  description: string
  route: boolean
  refuge?: boolean
  geometry: RoomGeometry
  baseline: RoomConditions
  noiseOffset: number
  lightOffset: number
  smellOffset: number
}

/** One selectable time stop in the sample day. */
export interface TimeStop {
  id: string
  label: string
  minutesAfterMidnight: number
}

/** Venue data and the crowd curve used to derive illustrative conditions. */
export interface SampleVenue {
  id: string
  name: string
  description: string
  disclosure: string
  rooms: VenueRoom[]
  timeStops: TimeStop[]
  crowdCurve: number[]
}

/** User-selected sensitivities: 0 = don't mind, 3 = very sensitive. */
export interface SensoryPreferences {
  noise: number
  crowd: number
  light: number
  smell: number
}

/** Current high-level stage of the Calmpass experience. */
export type CalmpassStep = 'landing' | 'preferences' | 'explorer' | 'visit-plan'

/** All room conditions for a selected time, keyed by room ID. */
export type ConditionMap = Record<string, RoomConditions>

/** Recommendation result contract for the later planning phase. */
export interface TimeRecommendation {
  timeId: string
  comfort: number
  discomfort: number
  contributions: Record<MetricKey, number>
  tradeOffs: string[]
}

/** Optional saved visit details used by the later visit-plan phase. */
export interface VisitPlan {
  timeId: string
  destinationRoomId: string
  note: string
}
