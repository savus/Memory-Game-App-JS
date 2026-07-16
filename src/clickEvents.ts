import { gameHandler } from "./app.js";
import type Card from "./Card.js";

export const cardOnClickHandler = async (card: Card) => {
  gameHandler.handlePlayerChoice(card);
};
