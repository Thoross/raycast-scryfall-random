import { Color, Detail } from '@raycast/api'
import { ScryfallCard, ScryfallRarity, ScryfallRarityLike } from '@scryfall/api-types'
import { getColour } from '../utils/legalities'

export interface DetailMetaProps<T> {
  card: T
}

const colorRarity = (rarity: ScryfallRarityLike) => {
  switch (rarity) {
    case ScryfallRarity.Mythic: {
      return Color.Orange
    }
    case ScryfallRarity.Rare: {
      return Color.Yellow
    }
    case ScryfallRarity.Uncommon: {
      return Color.PrimaryText
    }
    default:
      return Color.SecondaryText
  }
}

const DetailMeta = <T extends ScryfallCard.Any>({ card }: DetailMetaProps<T>) => {
  return (
    <Detail.Metadata>
      <Detail.Metadata.Label
        title="Rarity"
        text={{
          value: `${card.rarity.slice(0, 1).toUpperCase()}${card?.rarity.slice(1)}`,
          color: colorRarity(card.rarity),
        }}
      />
      <Detail.Metadata.Label title="Set" text={card.set_name} icon={{ source: `svg/${card.set}.svg` }} />
      <Detail.Metadata.Label title="Collector Number" text={card.collector_number} />
      <Detail.Metadata.Label title="Illustrated By" text={card.artist} />
      <Detail.Metadata.Separator />
      <Detail.Metadata.TagList title="Legalities">
        {Object.entries(card.legalities).map(([key, value]) => {
          return <Detail.Metadata.TagList.Item text={key} key={key} color={getColour(value)} />
        })}
      </Detail.Metadata.TagList>
    </Detail.Metadata>
  )
}

export default DetailMeta
