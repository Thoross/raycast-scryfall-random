import { ScryfallCard } from '@scryfall/api-types'
import Base from './Base'
import {
  formatOracleText,
  generateBottomRightDetails,
  generateCardNameMarkdown,
  generateFlavorText,
  generateImageMarkdown,
} from '../utils/textUtils'
import { getSymbols } from '../utils/symbology'

export interface ReversibleProps {
  card: ScryfallCard.ReversibleCard
  isLoading: boolean
}

const Reversible = ({ card, isLoading }: ReversibleProps) => {
  const symbols = getSymbols()
  const renderCardNameMarkdown = generateCardNameMarkdown(symbols)
  let markdown
  if (card) {
    const [front, back] = card.card_faces
    markdown = `
  ${generateImageMarkdown(front.name, front.image_uris.normal)}

  ${renderCardNameMarkdown(front)}
  ### ${front.type_line}

  ${generateBottomRightDetails(front)}

  ${front.oracle_text && formatOracleText(front.oracle_text)}

  ${generateFlavorText(front)}

  ---

  ${generateImageMarkdown(back.name, back.image_uris.normal)}

  ${renderCardNameMarkdown(back)}
  ### ${back.type_line}

  ${generateBottomRightDetails(back)}

  ${back.oracle_text && formatOracleText(back.oracle_text)}

  ${generateFlavorText(back, true)}
    `
  }
  return <Base isLoading={isLoading} card={card} markdown={markdown} />
}

export default Reversible
