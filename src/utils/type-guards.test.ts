import { describe, it, expect } from 'vitest'

import { isAdventure, isCard, isFlip, isMDFC, isSplit, isTransform, isVanguard } from './type-guards'
import { ScryfallLayout } from '@scryfall/api-types'
import { cardStub, error } from './fixtures'

describe('isAdventure', () => {
  it('returns true when is adventure card', () => {
    const card = {
      ...cardStub,
      layout: 'adventure' as ScryfallLayout.Adventure,
    }
    expect(isAdventure(card)).toEqual(true)
  })
  it("doesn't match another type", () => {
    const card = {
      ...cardStub,
      layout: 'flip' as ScryfallLayout.ArtSeries,
    }
    expect(isAdventure(card)).toBeFalsy()
  })
})

describe('isCard', () => {
  it('returns true when is a card', () => {
    const card = { ...cardStub, layout: 'adventure' as ScryfallLayout.Adventure }
    expect(isCard(card)).toBeTruthy()
  })
  it("doesn't match an error", () => {
    expect(isCard(error)).toBeFalsy()
  })
})

describe('isSplit', () => {
  it('returns true when is a split card', () => {
    const card = { ...cardStub, layout: 'split' as ScryfallLayout.Split }
    expect(isSplit(card)).toBeTruthy()
  })
  it("doesn't match another type", () => {
    const card = {
      ...cardStub,
      layout: 'adventure' as ScryfallLayout.Adventure,
    }
    expect(isSplit(card)).toBeFalsy()
  })
})

describe('isMDFC', () => {
  it('returns true when is a mdfc', () => {
    const card = { ...cardStub, layout: 'modal_dfc' as ScryfallLayout.ModalDfc }
    expect(isMDFC(card)).toBeTruthy()
  })
  it("doesn't match another type", () => {
    const card = {
      ...cardStub,
      layout: 'adventure' as ScryfallLayout.Adventure,
    }
    expect(isMDFC(card)).toBeFalsy()
  })
})

describe('isTransform', () => {
  it('returns true when is a transform card', () => {
    const card = { ...cardStub, layout: 'transform' as ScryfallLayout.Transform }
    expect(isTransform(card)).toBeTruthy()
  })
  it("doesn't match another type", () => {
    const card = {
      ...cardStub,
      layout: 'adventure' as ScryfallLayout.Adventure,
    }
    expect(isTransform(card)).toBeFalsy()
  })
})

describe('isFlip', () => {
  it('returns true when is a flip card', () => {
    const card = { ...cardStub, layout: 'flip' as ScryfallLayout.Flip }
    expect(isFlip(card)).toBeTruthy()
  })
  it("doesn't match another type", () => {
    const card = {
      ...cardStub,
      layout: 'adventure' as ScryfallLayout.Adventure,
    }
    expect(isFlip(card)).toBeFalsy()
  })
})

describe('isVanguard', () => {
  it('returns true when is a vanguard card', () => {
    const card = {
      ...cardStub,
      layout: 'vanguard' as ScryfallLayout.Vanguard,
      oracle_text: '',
      hand_modifier: '',
      life_modifier: '',
    }
    expect(isVanguard(card)).toBeTruthy()
  })
  it("doesn't match another type", () => {
    const card = {
      ...cardStub,
      layout: 'adventure' as ScryfallLayout.Adventure,
    }
    expect(isVanguard(card)).toBeFalsy()
  })
})
