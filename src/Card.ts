import { cardOnClickHandler } from "./clickEvents.js";
import { FACEDOWN } from "./constants.js";
import type { TPokemonData, TPokemonDom } from "./types.js";
type TCardState = {
  isClickable: boolean;
  facePosition: "up" | "down";
};

class Card {
  html: TPokemonDom;
  cardData: TPokemonData;
  state: TCardState;
  constructor(htmlData: TPokemonDom, cardData: TPokemonData) {
    this.html = htmlData;
    this.cardData = cardData;
    this.state = {
      isClickable: false,
      facePosition: "down",
    };
    this.html.addEventListener("click", () => {
      cardOnClickHandler(this);
    });
  }

  flipCardUp = () => {
    this.state.facePosition = "up";
    this.html.classList.remove(FACEDOWN);
  };

  flipCardDown = () => {
    this.state.facePosition = "down";
    this.html.classList.add(FACEDOWN);
  };
}

export default Card;
