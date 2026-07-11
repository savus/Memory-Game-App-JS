import { cardOnClickHandler } from "./clickEvents.js";
import { CSS_CLASSES } from "./constants.js";
import type { TPokemon, TPokemon_Dom } from "./types.js";

class Card {
  html: TPokemon_Dom;
  cardData: TPokemon;
  facePosition: "up" | "down";

  constructor(htmlData: TPokemon_Dom, cardData: TPokemon) {
    this.html = htmlData;
    this.cardData = cardData;
    this.facePosition = "down";

    this.html.addEventListener("click", () => {
      cardOnClickHandler(this);
    });
  }

  flipCardUp = () => {
    this.facePosition = "up";
    this.html.classList.remove(CSS_CLASSES.FACE_DOWN);
  };

  flipCardDown = () => {
    this.facePosition = "down";
    this.html.classList.add(CSS_CLASSES.FACE_DOWN);
  };
}

export default Card;
