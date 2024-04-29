import { ScryfallCard } from '@scryfall/api-types'
import {
  formatOracleText,
  generateBottomRightDetails,
  generateCardNameMarkdown,
  generateImageMarkdown,
} from '../utils/textUtils'
import { getSymbols } from '../utils/symbology'
import Base from './Base'

export interface ModalDFCProps {
  card: ScryfallCard.ModalDfc
  isLoading: boolean
}

const ModalDFC = ({ card, isLoading }: ModalDFCProps) => {
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

  --------

  ${generateImageMarkdown(back.name, back.image_uris.normal)}

  ${renderCardNameMarkdown(back)}
  ### ${back.type_line}

  ${generateBottomRightDetails(back)}

  ${back.oracle_text && formatOracleText(back.oracle_text)}
    `
  }

  return <Base card={card} isLoading={isLoading} markdown={markdown} />
}

export default ModalDFC
