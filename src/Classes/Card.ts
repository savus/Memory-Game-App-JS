import { cardOnClickHandler } from "../clickEvents.js";
import { DATA_FACE_POSIION, DOWN, UP } from "../constants.js";
import type { TPokemonData, TPokemonDom } from "../types.js";
import { animateElement } from "../utility.js";
type TCardState = {
  isClickable: boolean;
  facePosition: "up" | "down";
  isFlippable: boolean;
};

class Card {
  html: TPokemonDom;
  cardData: TPokemonData;
  state: TCardState;
  constructor(htmlData: TPokemonDom, cardData: TPokemonData) {
    this.html = htmlData;
    this.cardData = cardData;
    this.state = {
      isClickable: true,
      facePosition: "down",
      isFlippable: true,
    };
    this.html.addEventListener("click", () => {
      if (this.state.isClickable) return cardOnClickHandler(this);
      console.log("card is not clickable");
    });
  }

  flipCard = (
    direction: "up" | "down" | "toggle" = "toggle",
    ignoreState: boolean = false,
  ) => {
    if (!this.state.isFlippable && !ignoreState) return;

    const up = () => {
      this.state.facePosition = UP;
      this.html.dataset.facePosition = UP;
    };

    const down = () => {
      this.state.facePosition = DOWN;
      this.html.dataset.facePosition = DOWN;
    };

    const toggle = () => {
      if (this.state.facePosition === "up") {
        up();
      } else {
        down();
      }
    };

    switch (direction) {
      case "up":
        up();
        break;
      case "down":
        down();
        break;
      case "toggle":
        toggle();
        break;
    }
  };

  selectCard = () => {
    this.flipCard("up");
    this.state.isClickable = false;
    this.state.isFlippable = false;
  };

  deSelectCard = async () => {
    await animateElement(
      this.html,
      { type: DATA_FACE_POSIION, value: "down" },
      "transitionend",
    );
    this.state.isClickable = true;
    this.state.isFlippable = true;
  };
}

export default Card;
