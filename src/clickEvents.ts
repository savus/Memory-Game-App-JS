import type Card from "./Classes/Card.js";
import GameHandler from "./Classes/gameHandler.js";

export const cardOnClickHandler = async (card: Card) => {
  GameHandler.handlePlayerChoice(card);
};
