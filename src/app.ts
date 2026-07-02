import { API_REQUESTS } from "./api.js";
import { CSS_CLASSES, pokeNames } from "./constants.js";
import type { TPokemon } from "./types.js";
import { populateAllCards } from "./utility.js";

export const card_container = document.querySelector(
  `.${CSS_CLASSES.CARD_CONTAINER}`,
)!;
export const pokemon: TPokemon[] = [];
const cardData: TPokemon[] = [];

const generateCardData = (array: TPokemon[]) => {
  array.forEach((item) => {
    cardData.push(item);
    cardData.push(item);
  });
};

const runGame = () => {
  generateCardData(pokemon);
  populateAllCards(cardData);
};

API_REQUESTS.fetchAllData(pokeNames).finally(runGame);
