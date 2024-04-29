import { ScryfallCard } from '@scryfall/api-types'
import Actions from './Actions'
import DetailMeta from './DetailMeta'
import { Detail } from '@raycast/api'

export interface BaseProps<T extends ScryfallCard.Any> {
  card: T
  isLoading: boolean
  markdown: string
}

const Base = <T extends ScryfallCard.Any>({ card, isLoading, markdown }: BaseProps<T>) => {
  const isReady = !isLoading && card
  return (
    <Detail
      isLoading={isLoading}
      markdown={isLoading ? null : markdown}
      navigationTitle={card?.name}
      metadata={isReady && <DetailMeta card={card} />}
      actions={isReady && <Actions card={card} />}
    />
  )
}

export default Base
