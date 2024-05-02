import { describe, it, expect } from 'vitest'

import {
  isAdventure,
  isArtSeries,
  isCard,
  isFlip,
  isMDFC,
  isReversible,
  isSplit,
  isTransform,
  isVanguard,
} from '../type-guards'
import { ScryfallLayout } from '@scryfall/api-types'
import { cardStub, error } from '../../fixtures'

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
  it('returns false if card is undefined', () => {
    expect(isAdventure(undefined)).toBeFalsy()
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
  it('returns false if card is undefined', () => {
    expect(isSplit(undefined)).toBeFalsy()
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
  it('returns false if card is undefined', () => {
    expect(isMDFC(undefined)).toBeFalsy()
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
  it('returns false if card is undefined', () => {
    expect(isTransform(undefined)).toBeFalsy()
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
  it('returns false if card is undefined', () => {
    expect(isFlip(undefined)).toBeFalsy()
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
  it('returns false if card is undefined', () => {
    expect(isVanguard(undefined)).toBeFalsy()
  })
})

describe('isArtSeries', () => {
  it('returns true when card is an art card', () => {
    const card = {
      ...cardStub,
      layout: 'art_series' as ScryfallLayout.ArtSeries,
    }
    expect(isArtSeries(card)).toBeTruthy()
  })
  it("doesn't match another type", () => {
    const card = {
      ...cardStub,
      layout: 'adventure' as ScryfallLayout.Adventure,
    }
    expect(isArtSeries(card)).toBeFalsy()
  })
  it('returns false if card is undefined', () => {
    expect(isArtSeries(undefined)).toBeFalsy()
  })
})

describe('isReversible', () => {
  it('returns true when a card is a reversible card', () => {
    const card = {
      ...cardStub,
      layout: 'reversible_card' as ScryfallLayout.ReversibleCard,
    }
    expect(isReversible(card)).toBeTruthy()
  })
  it("doesn't match another type", () => {
    const card = {
      ...cardStub,
      layout: 'adventure' as ScryfallLayout.Adventure,
    }
    expect(isReversible(card)).toBeFalsy()
  })
  it('returns false if card is undefined', () => {
    expect(isReversible(undefined)).toBeFalsy()
  })
})
