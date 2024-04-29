import { ScryfallCard, ScryfallError } from "@scryfall/api-types";
import fetch from "node-fetch";

export const fetchCard = async (query?: string) => {
  const baseUrl = "https://api.scryfall.com/cards/random";
  const url = query ? `${baseUrl}?q=${encodeURIComponent(query)}` : baseUrl;
  const response = await fetch(url);
  const data = (await response.json()) as ScryfallCard.AnySingleFaced | ScryfallError;
  return data;
};
