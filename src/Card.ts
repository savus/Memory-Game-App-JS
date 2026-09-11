import { cardOnClickHandler } from "./clickEvents.js";
import { FACEDOWN } from "./constants.js";
import type { TPokemonData, TPokemonDom } from "./types.js";

class Card {
  html: TPokemonDom;
  cardData: TPokemonData;
  facePosition: "up" | "down";

  constructor(htmlData: TPokemonDom, cardData: TPokemonData) {
    this.html = htmlData;
    this.cardData = cardData;
    this.facePosition = "down";

    this.html.addEventListener("click", () => {
      cardOnClickHandler(this);
    });
  }

  flipCardUp = () => {
    this.facePosition = "up";
    this.html.classList.remove(FACEDOWN);
  };

  flipCardDown = () => {
    this.facePosition = "down";
    this.html.classList.add(FACEDOWN);
  };
}

export default Card;
