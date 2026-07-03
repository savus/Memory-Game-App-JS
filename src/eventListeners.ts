import type { TPokemon } from "./types.js";

export const cardOnClick = (card: HTMLElement & { metaData?: TPokemon }) => {
  if (card.metaData) {
    if (card.metaData.isFaceUp) {
      card.metaData.isFaceUp = false;
      card.style.backgroundColor = "white";
    } else {
      card.metaData.isFaceUp = true;
      card.style.backgroundColor = "red";
    }
  }
};
