import { ScryfallCard } from '@scryfall/api-types'
import Base from './Base'
import { formatOracleText, generateFlavorText, generateImageMarkdown } from '../utils/textUtils'

export interface VanguardProps {
  card: ScryfallCard.Vanguard
  isLoading: boolean
}

const Vanguard = ({ card, isLoading }: VanguardProps) => {
  let markdown
  if (card) {
    markdown = `
  ${generateImageMarkdown(card.name, card.image_uris.normal)}

  # ${card.name}

  Hand size modifier: ${card.hand_modifier}

  Life total modifier: ${card.life_modifier}

  ${card.oracle_text ? formatOracleText(card.oracle_text) : ''}

  ${generateFlavorText(card)}
    `
  }
  return <Base card={card} isLoading={isLoading} markdown={markdown} />
}

export default Vanguard
