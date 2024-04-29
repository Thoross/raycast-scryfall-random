import { ScryfallCard } from '@scryfall/api-types'
import {
  formatOracleText,
  generateBottomRightDetails,
  generateCardNameMarkdown,
  generateFlavorText,
  generateImageMarkdown,
} from '../utils/textUtils'
import { getSymbols } from '../utils/symbology'
import Base from './Base'

export interface SingleFacedProps {
  card: ScryfallCard.AnySingleFaced
  isLoading: boolean
}

const SingleFaced = ({ card, isLoading }: SingleFacedProps) => {
  const symbols = getSymbols()
  let markdown
  if (card) {
    const formattedOracleText = formatOracleText(card?.oracle_text)
    markdown = `
  ${generateImageMarkdown(card.name, card?.image_uris?.normal)}

  ${generateCardNameMarkdown(symbols)(card)}
  ### ${card.type_line}

  ${generateBottomRightDetails(card)}

  ${card.oracle_text && formattedOracleText}

  ----

  ${generateFlavorText(card)}
  `
  }
  return <Base card={card} isLoading={isLoading} markdown={markdown} />
}

export default SingleFaced
