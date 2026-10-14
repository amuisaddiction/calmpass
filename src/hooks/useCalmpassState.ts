import { useEffect, useState } from 'react'
import type { CalmpassStep, SensoryPreferences } from '../types/calmpass'
import { readStoredValue, writeStoredValue } from '../utils/storage'

const STORAGE_KEY = 'calmpass-state-v1'

export interface CalmpassState {
  step: CalmpassStep
  preferences: SensoryPreferences
  selectedTimeIndex: number
  selectedRoomId: string
}

const defaultState: CalmpassState = {
  step: 'landing',
  preferences: { noise: 0, crowd: 0, light: 0, smell: 0 },
  selectedTimeIndex: 0,
  selectedRoomId: 'waiting-area',
}

function isValidState(value: unknown): value is CalmpassState {
  if (!value || typeof value !== 'object') return false
  const state = value as Partial<CalmpassState>
  const validSteps: CalmpassStep[] = ['landing', 'preferences', 'explorer', 'visit-plan']
  return Boolean(
    state.step &&
    validSteps.includes(state.step) &&
    state.preferences &&
    ['noise', 'crowd', 'light', 'smell'].every((key) => {
      const level = state.preferences?.[key as keyof SensoryPreferences]
      return typeof level === 'number' && level >= 0 && level <= 3
    }) &&
    typeof state.selectedTimeIndex === 'number' &&
    state.selectedTimeIndex >= 0 &&
    state.selectedTimeIndex <= 4 &&
    typeof state.selectedRoomId === 'string',
  )
}

/** Persist only small, non-sensitive UI preferences; no account or backend is used. */
export function useCalmpassState() {
  const [state, setState] = useState<CalmpassState>(() => {
    const saved = readStoredValue<unknown>(STORAGE_KEY, null)
    return isValidState(saved) ? saved : defaultState
  })

  useEffect(() => {
    writeStoredValue(STORAGE_KEY, state)
  }, [state])

  return { state, setState, reset: () => setState(defaultState) }
}
