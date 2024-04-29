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

export interface AdventureProps {
  card: ScryfallCard.Adventure
  isLoading: boolean
}

const Adventure = ({ card, isLoading }: AdventureProps) => {
  const symbols = getSymbols()
  const renderCardNameMarkdown = generateCardNameMarkdown(symbols)
  let markdown
  if (card) {
    const [main, adventure] = card.card_faces
    markdown = `
  ${generateImageMarkdown(main.name, card.image_uris.normal)}

  ${renderCardNameMarkdown(main)}
  ### ${main.type_line}

  ${generateBottomRightDetails(main)}

  ${main.oracle_text ? formatOracleText(main.oracle_text) : ''}

  ${generateFlavorText(main)}

  ----

  ${renderCardNameMarkdown(adventure)}
  ### ${adventure.type_line}

  ${adventure.oracle_text ? formatOracleText(adventure.oracle_text) : ''}

  ${generateFlavorText(adventure)}
    `
  }
  return <Base card={card} isLoading={isLoading} markdown={markdown} />
}

export default Adventure
