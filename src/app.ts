import { API_REQUESTS } from "./api.js";
import { CSS_CLASSES, pokeNames } from "./constants.js";
import type { TPokemon } from "./types.js";
import {
  displayAllFaceStatuses,
  generateCardData,
  populateAllCards,
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

export const card_container = document.querySelector(
  `.${CSS_CLASSES.CARD_CONTAINER}`,
)!;

export const pokemonData: TPokemon[] = [];
export const cardData: TPokemon[] = [];

const runGame = async () => {
  generateCardData(pokemonData);
  populateAllCards(cardData);
};

API_REQUESTS.fetchAllPokemon(pokeNames).finally(runGame);

document.addEventListener("keyup", (e) => {
  const key = e.key;
  if (key === "Enter") displayAllFaceStatuses();
});
