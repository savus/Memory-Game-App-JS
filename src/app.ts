import { API_REQUESTS } from "./api.js";
import Card from "./Card.js";
import { CSS_CLASSES, pokeNames } from "./constants.js";
import GameHandler from "./gameHandler.js";
import type { TPokemon } from "./types.js";
import {
  generateCardData,
  createAndAppendAllCards,
  wait,
  animateElement,
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

const playerPoints = document.querySelector(`${CSS_CLASSES.PLAYER_POINTS}`)!;
const incomingPoints = document.querySelector(
  `${CSS_CLASSES.INCOMING_POINTS}`,
)! as HTMLElement;

let gamePoints = 0;
let incomingGamePoints = 0;
let whileLoopFailsafe = 0;

export const gameHandler = new GameHandler();

const setPlayerPoints = async (points: number) => {
  incomingGamePoints = points;
  playerPoints.innerHTML = `Points: ${gamePoints}`;
  incomingPoints.innerHTML = `+ ${incomingGamePoints}`;
  await animateElement(incomingPoints, CSS_CLASSES.ACTIVE, "transitionend");
  while (incomingGamePoints > 0) {
    whileLoopFailsafe++;
    if (whileLoopFailsafe >= 1000) return;
    incomingGamePoints--;
    gamePoints++;
    incomingPoints.innerHTML = `+ ${incomingGamePoints}`;
    playerPoints.innerHTML = `Points: ${gamePoints}`;
    await wait(10);
  }
  incomingPoints.classList.remove("active");
  whileLoopFailsafe = 0;
};

const runGame = async () => {
  generateCardData(pokemonData);
  createAndAppendAllCards(cardData);
};

API_REQUESTS.fetchAllPokemon(pokeNames).finally(() => {
  runGame();
});

document.addEventListener("keyup", async (e) => {
  const key = e.key;
  switch (key) {
    case "Enter":
  }
});
