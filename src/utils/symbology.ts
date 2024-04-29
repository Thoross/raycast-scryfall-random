import symbols from "./symbology.json";

export const getSymbols = () => {
  return symbols.data.reduce<Record<string, string>>((acc, curr) => {
    acc[curr.symbol] = curr.svg_uri;
    return acc;
  }, {});
};
