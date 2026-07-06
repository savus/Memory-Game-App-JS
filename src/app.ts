import { API_REQUESTS } from "./api.js";
import Card from "./Card.js";
import { CSS_CLASSES, pokeNames } from "./constants.js";
import type { TPokemon } from "./types.js";
import {
  buildCardHTML,
  generateCardData,
  createAndAppendAllCards,
} from "./utility.js";

export const dummyColors = [
  "#e80a0a",
  "#0ed3e5",
  "#d8d512",
  "#0a2e91",
  "#02b61d",
  "#c205a0",
  "#c78004",
  "#000",
];

export const dummyTypes = [
  "Frank",
  "Burger",
  "Twenty-three",
  "Meow",
  "Hannigan-Montgomery",
  "ERWERILWEIRW",
  "WOA MAMA",
  "Hi",
];

export const allCards: Card[] = [];
export const pokemonData: TPokemon[] = [];
export const cardData: TPokemon[] = [];

export const card_container = document.querySelector(
  `.${CSS_CLASSES.CARD_CONTAINER}`,
)!;

const runGame = async () => {
  generateCardData(pokemonData);
  createAndAppendAllCards(cardData);
  console.log(cardData, allCards);
};

API_REQUESTS.fetchAllPokemon(pokeNames).finally(() => {
  runGame();
});

document.addEventListener("keyup", (e) => {
  const key = e.key;
});
