import { expect, describe, it } from 'vitest'
import {
  generateBottomRightDetails,
  generateCardNameMarkdown,
  generateFlavorText,
  generateImageMarkdown,
  replaceNewlines,
  replaceSymbols,
} from './textUtils'
import { cardStub, normalCard } from './fixtures'
import { ScryfallCard, ScryfallColor, ScryfallLayout } from '@scryfall/api-types'

describe('replaceNewlines', () => {
  it('replaces newlines in strings', () => {
    const test = "This is a test string.\nHere's a new line"
    const result = "This is a test string.<br />Here's a new line"
    expect(replaceNewlines(test)).toEqual(result)
  })
  it('will ignore non newline characters', () => {
    const test = "This is a test string.<br />Here's a new line"
    const result = "This is a test string.<br />Here's a new line"
    expect(replaceNewlines(test)).toEqual(result)
  })
})

describe('replaceSymbols', () => {
  const symbols = {
    '{T}': 'https://svgs.scryfall.io/card-symbols/T.svg',
    '{1}': 'https://svgs.scryfall.io/card-symbols/1.svg',
    '{G}': 'https://svgs.scryfall.io/card-symbols/G.svg',
  }
  it('replaces a {T}', () => {
    const test = 'This is a {T} symbol'
    const result =
      'This is a <img src="https://svgs.scryfall.io/card-symbols/T.svg?raycast-height=16&raycast-width=16" /> symbol'

    expect(replaceSymbols(symbols, test)).toEqual(result)
  })
  it('replaces a {1}', () => {
    const test = 'This is a {1} symbol'
    const result =
      'This is a <img src="https://svgs.scryfall.io/card-symbols/1.svg?raycast-height=16&raycast-width=16" /> symbol'

    expect(replaceSymbols(symbols, test)).toEqual(result)
  })
  it('replaces multiple', () => {
    const test = '{1}{G}, Sacrifice Caustic Caterpillar: Destroy target artifact or enchantment.'
    const result =
      '<img src="https://svgs.scryfall.io/card-symbols/1.svg?raycast-height=16&raycast-width=16" /><img src="https://svgs.scryfall.io/card-symbols/G.svg?raycast-height=16&raycast-width=16" />, Sacrifice Caustic Caterpillar: Destroy target artifact or enchantment.'
    expect(replaceSymbols(symbols, test)).toEqual(result)
  })
})

describe('getBottomRightDetails', () => {
  const creature = {
    power: '2',
    toughness: '2',
  }
  const loyalty = {
    loyalty: '2',
  }
  it('returns nothing for neither creatures nor planeswalkers', () => {
    expect(generateBottomRightDetails(normalCard)).toContain('\n\n\n')
  })
  it('returns the power and toughness for a card', () => {
    const card = { ...normalCard, ...creature }
    expect(generateBottomRightDetails(card)).toContain('2/2')
  })
  it('returns loyalty for a card', () => {
    const card = { ...normalCard, ...loyalty }
    expect(generateBottomRightDetails(card)).toContain('Loyalty: 2')
  })
  it('returns both power and toughness and loyalty for a card', () => {
    const card = { ...normalCard, ...loyalty, ...creature }
    const output = generateBottomRightDetails(card)
    expect(output).toContain('2/2')
    expect(output).toContain('Loyalty: 2')
  })
})

describe('generateImageMarkdown', () => {
  it('generates card image markdown', () => {
    const expected = '![Test](foo&raycast-height=350&raycast-width=250)'
    expect(generateImageMarkdown('Test', 'foo')).toEqual(expected)
  })
})

describe('generateCardNameMarkdown', () => {
  const symbols = { '{T}': 'foo', '{G}': 'g' }
  const renderCardName = generateCardNameMarkdown(symbols)
  const testCard = { ...normalCard, name: 'Test', mana_cost: '{T}' }
  it('replaces symbols in string', () => {
    const expected = '## Test <img src="foo?raycast-height=16&raycast-width=16" />'
    expect(renderCardName(testCard)).toEqual(expected)
  })
  it("doesn't replace symbols in string", () => {
    expect(renderCardName(testCard)).not.toContain('<img src="g?raycast-height=16&raycast-width=16" />')
  })
  it('returns a flavor name and a regular name', () => {
    const flavorCard = { ...testCard, flavor_name: 'Flavor Name' }
    const result = renderCardName(flavorCard)
    expect(result).toContain('## Flavor Name <img src="foo?raycast-height=16&raycast-width=16" />')
    expect(result).toContain('### *Test*')
  })
})

describe('generateFlavorText', () => {
  it('generates flavour text', () => {
    const test = { ...normalCard, flavor_text: 'This is flavor text' }
    expect(generateFlavorText(test)).toEqual('*This is flavor text*')
  })
  it('returns an empty string when no flavor_text', () => {
    const test = { ...normalCard, flavor_text: undefined }
    expect(generateFlavorText(test)).toEqual('')
  })
})
