import { ScryfallCard } from '@scryfall/api-types'
import Base from './Base'
import {
  formatOracleText,
  generateBottomRightDetails,
  generateCardNameMarkdown,
  generateImageMarkdown,
} from '../utils/textUtils'
import { getSymbols } from '../utils/symbology'

export interface FlipProps {
  card: ScryfallCard.Flip
  isLoading: boolean
}

const Flip = ({ card, isLoading }: FlipProps) => {
  let markdown
  const symbols = getSymbols()
  const renderCardNameMarkdown = generateCardNameMarkdown(symbols)
  if (card) {
    const [top, bottom] = card.card_faces
    markdown = `
  ${generateImageMarkdown(card.name, card.image_uris.normal)}

  ${renderCardNameMarkdown(top)}
  ### ${top.type_line}

  ${generateBottomRightDetails(top)}

  ${top.oracle_text ? formatOracleText(top.oracle_text) : ''}

  -----

  ${renderCardNameMarkdown(bottom)}
  ### ${bottom.type_line}

  ${generateBottomRightDetails(top)}

  ${bottom.oracle_text ? formatOracleText(bottom.oracle_text) : ''}
    `
  }
  return <Base card={card} isLoading={isLoading} markdown={markdown} />
}

export default Flip
