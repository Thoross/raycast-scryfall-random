import { LaunchProps, showToast, Toast } from '@raycast/api'
import { ScryfallCard } from '@scryfall/api-types'
import { useEffect, useState } from 'react'
import { fetchCard } from './utils/api'
import { showFailureToast } from '@raycast/utils'
import SingleFaced from './views/SingleFaced'
import SplitFaced from './views/SplitFaced'
import {
  isAdventure,
  isArtSeries,
  isCard,
  isFlip,
  isMDFC,
  isReversible,
  isSplit,
  isTransform,
  isVanguard,
} from './utils/type-guards'
import ModalDFC from './views/ModalDFC'
import Transform from './views/Transform'
import Adventure from './views/Adventure'
import Flip from './views/Flip'
import Vanguard from './views/Vanguard'
import Reversible from './views/ReversibleCard'
import ArtSeries from './views/ArtSeries'

interface CardArguments {
  query?: string
}
export default function Command(props: LaunchProps<{ arguments: CardArguments }>) {
  const [card, setCard] = useState<ScryfallCard.Any | undefined>(undefined)
  const [isLoading, setIsLoading] = useState(true)
  const { query } = props.arguments
  useEffect(() => {
    setIsLoading(true)
    async function getCard() {
      try {
        const data = await fetchCard(query)
        if (isCard(data)) {
          setCard(data)
          setIsLoading(false)
        } else {
          showToast({
            title: 'No card was found.',
            message: 'Check your query, if you provided one',
            style: Toast.Style.Failure,
          })
        }
      } catch (e) {
        showFailureToast('Something went wrong!')
        console.log(e)
      }
    }
    getCard()
  }, [])

  try {
    switch (true) {
      case isSplit(card): {
        return <SplitFaced card={card} isLoading={isLoading} />
      }
      case isMDFC(card): {
        return <ModalDFC card={card} isLoading={isLoading} />
      }
      case isReversible(card): {
        return <Reversible card={card} isLoading={isLoading} />
      }
      case isTransform(card): {
        return <Transform card={card} isLoading={isLoading} />
      }
      case isAdventure(card): {
        return <Adventure card={card} isLoading={isLoading} />
      }
      case isFlip(card): {
        return <Flip card={card} isLoading={isLoading} />
      }
      case isVanguard(card): {
        return <Vanguard card={card} isLoading={isLoading} />
      }
      case isArtSeries(card): {
        return <ArtSeries card={card} isLoading={isLoading} />
      }
      default:
        return <SingleFaced card={card as ScryfallCard.AnySingleFaced} isLoading={isLoading} />
    }
  } catch (e) {
    showFailureToast('Something went wrong!')
    return null
  }
}
