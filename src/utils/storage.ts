/** Safe JSON storage helpers: storage can be unavailable or contain invalid data. */
export function readStoredValue<T>(key: string, fallback: T): T {
  try {
    const raw = window.localStorage.getItem(key)
    if (raw === null) return fallback
    return JSON.parse(raw) as T
  } catch {
    return fallback
  }
}

export function writeStoredValue<T>(key: string, value: T): boolean {
  try {
    window.localStorage.setItem(key, JSON.stringify(value))
    return true
  } catch {
    return false
  }
}

export function removeStoredValue(key: string): boolean {
  try {
    window.localStorage.removeItem(key)
    return true
  } catch {
    return false
  }
}
