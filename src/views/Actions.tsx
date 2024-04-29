import { Action, ActionPanel } from '@raycast/api'
import { getFavicon } from '@raycast/utils'
import { ScryfallCard } from '@scryfall/api-types'

export interface ActionsProps<T extends ScryfallCard.Any> {
  card: T
}

const Actions = <T extends ScryfallCard.Any>({ card }: ActionsProps<T>) => {
  const gatherer = card.related_uris.gatherer
  const scryfallUri = card.scryfall_uri
  const tcgpInf = card.related_uris.tcgplayer_infinite_articles
  const edhrec = card.related_uris.edhrec
  const tcgpDecks = card.related_uris.tcgplayer_infinite_decks
  return (
    <ActionPanel>
      <Action.OpenInBrowser title="View on Scryfall" url={scryfallUri} icon={getFavicon('https://scryfall.com')} />
      <Action.OpenInBrowser
        title="View Scryfall Rulings"
        url={`${scryfallUri}#rulings`}
        icon={getFavicon('https://scryfall.com')}
      />
      <Action.CopyToClipboard title="Copy Scryfall Url to Clipboard" content={scryfallUri} />
      {gatherer && (
        <Action.OpenInBrowser
          title="View on Gatherer"
          url={gatherer}
          icon={getFavicon('https://gatherer.wizards.com/')}
        />
      )}
      {tcgpInf && (
        <Action.OpenInBrowser
          title="View TCGPlayer Infinite Articles"
          url={tcgpInf}
          icon={getFavicon('https://www.tcgplayer.com')}
        />
      )}
      {tcgpDecks && (
        <Action.OpenInBrowser
          title="View TCGPlayer Decks"
          url={tcgpDecks}
          icon={getFavicon('https://www.tcgplayer.com')}
        />
      )}
      {tcgpDecks && (
        <Action.OpenInBrowser title="View on EDHREC" url={edhrec} icon={getFavicon('https://edhrec.com')} />
      )}
    </ActionPanel>
  )
}

export default Actions
