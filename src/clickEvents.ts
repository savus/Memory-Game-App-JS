import type Card from "./Card.js";
import GameHandler from "./gameHandler.js";

export const cardOnClickHandler = async (card: Card) => {
  GameHandler.handlePlayerChoice(card);
};
