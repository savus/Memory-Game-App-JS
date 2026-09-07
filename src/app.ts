import { API_REQUESTS } from "./api.js";
import Card from "./Card.js";
import { ACTIVE, pokeNames } from "./constants.js";
import GameHandler from "./GameHandler.js";

import type { THTML_Element, TPokemonData } from "./types.js";
import { swapScreens } from "./utility.js";

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

export const points = "Points: ";

export const allCards: Card[] = [];
export const pokemonData: TPokemonData[] = [];
export const cardData: TPokemonData[] = [];

export const card_container = document.querySelector(`.card-container`)!;

export const messageContainer = document.querySelector(
  `.message-container`,
)! as HTMLElement;

export const gameMessage = document.querySelector(`.game-message`)!;

export const playerPoints = document.querySelector(`.player-points`)!;

export const incomingPoints = document.querySelector(
  `.incoming-points`,
)! as HTMLElement;

const mainGame: THTML_Element = document.querySelector(`.main-game`)!;

const newGameButton = document.getElementById("new-game");

newGameButton?.addEventListener("click", () => {
  swapScreens(mainGame, ACTIVE);
});

export let gamePoints = 500;
export const setGamePoints = (points: number) => (gamePoints = points);

export let incomingGamePoints = 0;
export const setIncomingGamePoints = (points: number) =>
  (incomingGamePoints = points);

export let whileLoopFailsafe = 0;
export const setWhileLoopFailSafe = (limit: number) =>
  (whileLoopFailsafe = limit);

GameHandler.initializeApp(API_REQUESTS, pokeNames);
// let gameScreenIndex = 0;
// document.addEventListener("keyup", async (e) => {
//   const key = e.key;
//   switch (key) {
//     case "Enter":
//       gameHandler.displayGameMessage(SLIDE, "Testing");
//   }
// });
