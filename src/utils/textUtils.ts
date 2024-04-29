import TurndownService from 'turndown'
import { getSymbols } from '../utils/symbology'
import { ScryfallCard, ScryfallCardFace } from '@scryfall/api-types'

export const formatOracleText = (oracleText: string | undefined) => {
  const symbols = getSymbols()
  if (oracleText) {
    const turndown = new TurndownService()
    let text: string
    text = replaceNewlines(oracleText)
    text = replaceSymbols(symbols, text)

    return turndown.turndown(text)
  }
  return
}

export const replaceSymbols = (symbols: Record<string, string>, text: string) => {
  let replacement = text
  const matches = text.match(/\{.*?\}/gm)
  matches?.forEach((match) => {
    const symbol = symbols[match]
    replacement = replacement.replace(match, `<img src="${symbol}?raycast-height=16&raycast-width=16" />`)
  })
  return replacement
}

export const replaceNewlines = (text: string) => {
  return text.replaceAll('\n', '<br />')
}

export const generateImageMarkdown = (name: string, uri: string) =>
  `![${name}](${uri}&raycast-height=350&raycast-width=250)`

export const generateCardNameMarkdown =
  (symbols: Record<string, string>) => (card: ScryfallCard.AnySingleFaced | ScryfallCardFace.Any) => {
    if (card.flavor_name) {
      return `
  ## ${card.flavor_name} ${replaceSymbols(symbols, card.mana_cost)}
  ### *${card.name}*
      `
    }
    return `## ${card.name} ${replaceSymbols(symbols, card.mana_cost)}`
  }

export const generateBottomRightDetails = (card: ScryfallCardFace.Any | ScryfallCard.AnySingleFaced) =>
  `
${card.power && card.toughness ? `${card.power}/${card.toughness}` : ''}
${card.loyalty ? `Loyalty: ${card.loyalty}` : ''}
`

export const generateFlavorText = (card: ScryfallCardFace.Any | ScryfallCard.AnySingleFaced) => {
  if (!card.flavor_text) {
    return ''
  }
  return `*${card.flavor_text}*`
}
