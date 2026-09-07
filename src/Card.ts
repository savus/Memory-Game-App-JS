import { cardOnClickHandler } from "./clickEvents.js";
import { FACEDOWN } from "./constants.js";
import type { TPokemonData, TPokemon_Dom } from "./types.js";

class Card {
  html: TPokemon_Dom;
  cardData: TPokemonData;
  facePosition: "up" | "down";

  constructor(htmlData: TPokemon_Dom, cardData: TPokemonData) {
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
