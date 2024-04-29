import { ScryfallCard } from '@scryfall/api-types'
import {
  formatOracleText,
  generateBottomRightDetails,
  generateCardNameMarkdown,
  generateImageMarkdown,
} from '../utils/textUtils'
import { getSymbols } from '../utils/symbology'
import Base from './Base'

export interface SplitFacedProps {
  card: ScryfallCard.AnySingleSidedSplit
  isLoading: boolean
}

const SplitFaced = ({ card, isLoading }: SplitFacedProps) => {
  const symbols = getSymbols()
  let markdown
  const [front, back] = card.card_faces
  if (card) {
    markdown = `
  ${generateImageMarkdown(card.name, card.image_uris.normal)}

  ${generateCardNameMarkdown(symbols, front)}
  ## ${front.type_line}

  ${generateBottomRightDetails(front)}

  ${formatOracleText(front.oracle_text)}

  -----

  ${generateCardNameMarkdown(symbols, back)}
  ## ${back.type_line}

  ${generateBottomRightDetails(back)}

  ${formatOracleText(back.oracle_text)}
  `
  }
  return <Base isLoading={isLoading} markdown={isLoading ? null : markdown} card={card} />
}

export default SplitFaced
