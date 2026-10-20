import { beforeEach, describe, expect, it } from 'vitest'
import { readStoredValue, removeStoredValue, writeStoredValue } from './storage'

describe('storage utility', () => {
  beforeEach(() => {
    window.localStorage.clear()
  })

  it('returns fallback when key is not found', () => {
    expect(readStoredValue('missing-key', { count: 0 })).toEqual({ count: 0 })
  })

  it('writes and reads JSON values successfully', () => {
    const data = { preferences: { noise: 2, crowd: 1 } }
    const written = writeStoredValue('test-key', data)
    expect(written).toBe(true)

    const read = readStoredValue('test-key', null)
    expect(read).toEqual(data)
  })

  it('returns fallback when storage contains malformed JSON', () => {
    window.localStorage.setItem('malformed-key', '{invalid-json')
    expect(readStoredValue('malformed-key', 'default-val')).toBe('default-val')
  })

  it('removes stored items', () => {
    writeStoredValue('item-to-delete', 'hello')
    expect(readStoredValue('item-to-delete', '')).toBe('hello')

    const removed = removeStoredValue('item-to-delete')
    expect(removed).toBe(true)
    expect(readStoredValue('item-to-delete', 'gone')).toBe('gone')
  })
})

