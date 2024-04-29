import { ScryfallLegality, ScryfallLegalityLike } from "@scryfall/api-types";

export const getColour = (legality: ScryfallLegalityLike) => {
  switch (legality) {
    case ScryfallLegality.Restricted:
      return "#24678294";
    case ScryfallLegality.Banned:
      return "#a71f2a94";
    case ScryfallLegality.Legal:
      return "#75986e";
    case ScryfallLegality.NotLegal:
    default:
      return "";
  }
};
