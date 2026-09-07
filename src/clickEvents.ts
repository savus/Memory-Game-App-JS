import type Card from "./Card.js";
import GameHandler from "./GameHandler.js";

export const cardOnClickHandler = async (card: Card) => {
  GameHandler.handlePlayerChoice(card);
};
