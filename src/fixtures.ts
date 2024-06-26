import {
  ScryfallBorderColor,
  ScryfallColors,
  ScryfallImageStatus,
  ScryfallLanguageCode,
  ScryfallLegality,
  ScryfallObject,
  ScryfallRarity,
  SetType,
  ScryfallError,
  ScryfallLayout,
} from '@scryfall/api-types'

export const cardStub = {
  name: 'test',
  object: 'card' as ScryfallObject.ObjectType.Card,
  id: '',
  oracle_id: '',
  lang: ScryfallLanguageCode.English,
  prints_search_uri: '',
  rulings_uri: '',
  uri: '',
  scryfall_uri: '',
  legalities: {
    standard: ScryfallLegality.NotLegal,
    future: ScryfallLegality.NotLegal,
    historic: ScryfallLegality.NotLegal,
    timeless: ScryfallLegality.NotLegal,
    gladiator: ScryfallLegality.NotLegal,
    pioneer: ScryfallLegality.NotLegal,
    explorer: ScryfallLegality.NotLegal,
    modern: ScryfallLegality.NotLegal,
    legacy: ScryfallLegality.Legal,
    pauper: ScryfallLegality.NotLegal,
    vintage: ScryfallLegality.Legal,
    penny: ScryfallLegality.NotLegal,
    commander: ScryfallLegality.Legal,
    oathbreaker: ScryfallLegality.Legal,
    standardbrawl: ScryfallLegality.NotLegal,
    brawl: ScryfallLegality.NotLegal,
    alchemy: ScryfallLegality.NotLegal,
    paupercommander: ScryfallLegality.NotLegal,
    duel: ScryfallLegality.Legal,
    oldschool: ScryfallLegality.NotLegal,
    premodern: ScryfallLegality.NotLegal,
    predh: ScryfallLegality.NotLegal,
    historicbrawl: ScryfallLegality.NotLegal,
  },
  type_line: '',
  cmc: 0,
  keywords: [],
  reserved: false,
  color_identity: 'C' as any,
  card_faces: [],
  booster: false,
  border_color: ScryfallBorderColor.Black,
  collector_number: '',
  digital: false,
  finishes: [],
  frame: '',
  full_art: false,
  games: [],
  highres_image: false,
  image_status: ScryfallImageStatus.Missing,
  oversized: false,
  prices: {
    usd: '',
    usd_foil: '',
    usd_etched: '',
    eur: '',
    eur_foil: '',
    tix: '',
  },
  promo: false,
  rarity: ScryfallRarity.Rare,
  related_uris: {},
  released_at: '',
  reprint: false,
  set_name: '',
  scryfall_set_uri: '',
  set: '',
  set_search_uri: '',
  set_type: SetType.Funny,
  textless: false,
  set_uri: '',
  set_id: '',
  story_spotlight: false,
  variation: false as const,
  variation_of: undefined,
  colors: [] as ScryfallColors,
  card_back_id: '',
}

export const error = {
  status: 404,
  code: '404',
  details: 'Card not found',
  object: ScryfallObject.ObjectType.Error,
} satisfies ScryfallError

export const normalCard = {
  ...cardStub,
  layout: 'normal' as ScryfallLayout.Normal,
  oracle_text: '',
}
