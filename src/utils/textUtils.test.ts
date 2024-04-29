import { expect, describe, it } from "vitest";
import { replaceNewlines, replaceSymbols } from "./textUtils";

describe("replaceNewlines", () => {
  it("replaces newlines in strings", () => {
    const test = "This is a test string.\nHere's a new line";
    const result = "This is a test string.<br />Here's a new line";
    expect(replaceNewlines(test)).toEqual(result);
  });
  it("will ignore non newline characters", () => {
    const test = "This is a test string.<br />Here's a new line";
    const result = "This is a test string.<br />Here's a new line";
    expect(replaceNewlines(test)).toEqual(result);
  });
});

describe("replaceSymbols", () => {
  const symbols = {
    "{T}": "https://svgs.scryfall.io/card-symbols/T.svg",
    "{1}": "https://svgs.scryfall.io/card-symbols/1.svg",
    "{G}": "https://svgs.scryfall.io/card-symbols/G.svg",
  };
  it("replaces a {T}", () => {
    const test = "This is a {T} symbol";
    const result =
      'This is a <img src="https://svgs.scryfall.io/card-symbols/T.svg?raycast-height=14&raycast-width=14" /> symbol';

    expect(replaceSymbols(symbols, test)).toEqual(result);
  });
  it("replaces a {1}", () => {
    const test = "This is a {1} symbol";
    const result =
      'This is a <img src="https://svgs.scryfall.io/card-symbols/1.svg?raycast-height=14&raycast-width=14" /> symbol';

    expect(replaceSymbols(symbols, test)).toEqual(result);
  });
  it("replaces multiple", () => {
    const test = "{1}{G}, Sacrifice Caustic Caterpillar: Destroy target artifact or enchantment.";
    const result =
      '<img src="https://svgs.scryfall.io/card-symbols/1.svg?raycast-height=14&raycast-width=14" /><img src="https://svgs.scryfall.io/card-symbols/G.svg?raycast-height=14&raycast-width=14" />, Sacrifice Caustic Caterpillar: Destroy target artifact or enchantment.';
    expect(replaceSymbols(symbols, test)).toEqual(result);
  });
});
