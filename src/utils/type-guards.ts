import { ScryfallCard, ScryfallError } from '@scryfall/api-types'

export const isCard = (card: ScryfallCard.Any | ScryfallError): card is ScryfallCard.Any => {
  return 'name' in card
}

export const isSplit = (card: ScryfallCard.Any | undefined): card is ScryfallCard.Split => {
  if (!card) {
    return false
  }
  return card.layout === 'split'
}

export const isMDFC = (card: ScryfallCard.Any | undefined): card is ScryfallCard.ModalDfc => {
  if (!card) {
    return false
  }

  return card.layout === 'modal_dfc'
}

export const isTransform = (card: ScryfallCard.Any | undefined): card is ScryfallCard.Transform => {
  if (!card) {
    return false
  }

  return card.layout === 'transform'
}

export const isAdventure = (card: ScryfallCard.Any | undefined): card is ScryfallCard.Adventure => {
  if (!card) {
    return false
  }

  return card.layout === 'adventure'
}

export const isFlip = (card: ScryfallCard.Any | undefined): card is ScryfallCard.Flip => {
  if (!card) {
    return false
  }

  return card.layout === 'flip'
}

export const isVanguard = (card: ScryfallCard.Any | undefined): card is ScryfallCard.Vanguard => {
  if (!card) {
    return false
  }

  return card.layout === 'vanguard'
}

export const isReversible = (card: ScryfallCard.Any | undefined): card is ScryfallCard.ReversibleCard => {
  if (!card) {
    return false
  }
  return card.layout === 'reversible_card'
}
export const isArtSeries = (card: ScryfallCard.Any | undefined): card is ScryfallCard.ArtSeries => {
  if (!card) {
    return false
  }
  return card.layout === 'art_series'
}
