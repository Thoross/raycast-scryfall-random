import { describe, it, expect } from 'vitest'
import { getColour } from './legalities'

describe('getColour', () => {
  it('returns an empty string for not_legal', () => {
    expect(getColour('not_legal')).toEqual('')
  })
  it('returns an empty string for undefined', () => {
    expect(getColour(undefined as any)).toEqual('')
  })
  it('returns #a71f2a94 for banned', () => {
    expect(getColour('banned')).toEqual('#a71f2a94')
  })
  it('returns #24678294 for restricted', () => {
    expect(getColour('restricted')).toEqual('#24678294')
  })
  it('returns #75986e for legal', () => {
    expect(getColour('legal')).toEqual('#75986e')
  })
})
