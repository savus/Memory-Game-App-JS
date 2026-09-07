import { API_REQUESTS } from "./api.js";
import Card from "./Card.js";
import { ACTIVE, pokeNames } from "./constants.js";
import GameHandler from "./gameHandler.js";
import { generateCardData, createAndAppendAllCards, swapScreens, writePlayerPoints, } from "./utility.js";
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
export const allCards = [];
export const pokemonData = [];
export const cardData = [];
export const card_container = document.querySelector(`.card-container`);
export const messageContainer = document.querySelector(`.message-container`);
export const gameMessage = document.querySelector(`.game-message`);
export const playerPoints = document.querySelector(`.player-points`);
export const incomingPoints = document.querySelector(`.incoming-points`);
const mainGame = document.querySelector(`.main-game`);
const newGameButton = document.getElementById("new-game");
newGameButton?.addEventListener("click", () => {
    swapScreens(mainGame, ACTIVE);
});
export let gamePoints = 500;
export const setGamePoints = (points) => (gamePoints = points);
export let incomingGamePoints = 0;
export const setIncomingGamePoints = (points) => (incomingGamePoints = points);
export let whileLoopFailsafe = 0;
export const setWhileLoopFailSafe = (limit) => (whileLoopFailsafe = limit);
export const gameHandler = new GameHandler();
// const initializeApp = () =>
//   API_REQUESTS.fetchAllPokemon(pokeNames).finally(() => {
//     startMemoryGame();
//   });
// const startMemoryGame = async () => {
//   writePlayerPoints(`${points} ${gamePoints}`);
//   generateCardData(pokemonData);
//   createAndAppendAllCards(cardData);
// };
// initializeApp();
// let gameScreenIndex = 0;
// document.addEventListener("keyup", async (e) => {
//   const key = e.key;
//   switch (key) {
//     case "Enter":
//       gameHandler.displayGameMessage(SLIDE, "Testing");
//   }
// });
//# sourceMappingURL=app.js.map