import { API_REQUESTS } from "./api.js";
import Card from "./Card.js";
import { CSS_CLASSES, HTML_IDS, pokeNames } from "./constants.js";
import GameHandler from "./gameHandler.js";
import type { THTML_Element, TPokemon } from "./types.js";
import {
  generateCardData,
  createAndAppendAllCards,
  swapScreens,
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

export const messageContainer = document.querySelector(
  `.${CSS_CLASSES.MESSAGE_CONTAINER}`,
)! as HTMLElement;

export const gameMessage = document.querySelector(
  `.${CSS_CLASSES.GAME_MESSAGE}`,
)!;

export const playerPoints = document.querySelector(
  `.${CSS_CLASSES.PLAYER_POINTS}`,
)!;

export const incomingPoints = document.querySelector(
  `.${CSS_CLASSES.INCOMING_POINTS}`,
)! as HTMLElement;

const newGameButton = document.getElementById(HTML_IDS.NEW_GAME);

const mainGame: THTML_Element = document.querySelector(
  `.${CSS_CLASSES.MAIN_GAME}`,
)!;

export let gamePoints = 0;
export const setGamePoints = (points: number) => (gamePoints = points);
export let incomingGamePoints = 0;
export const setIncomingGamePoints = (points: number) =>
  (incomingGamePoints = points);
export let whileLoopFailsafe = 0;
export const setWhileLoopFailSafe = (limit: number) =>
  (whileLoopFailsafe = limit);

export const gameHandler = new GameHandler();

const runGame = async () => {
  generateCardData(pokemonData);
  createAndAppendAllCards(cardData);
};

API_REQUESTS.fetchAllPokemon(pokeNames).finally(() => {
  runGame();
});

newGameButton?.addEventListener("click", () => {
  swapScreens(mainGame, CSS_CLASSES.ACTIVE);
});

let gameScreenIndex = 0;
document.addEventListener("keyup", async (e) => {
  const key = e.key;
  switch (key) {
    case "Enter":
      gameHandler.displayGameMessage(CSS_CLASSES.SLIDE, "Testing");
  }
});
