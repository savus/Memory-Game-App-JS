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
};

API_REQUESTS.fetchAllPokemon(pokeNames).finally(() => {
  runGame();
});

document.addEventListener("keyup", async (e) => {
  const key = e.key;
  switch (key) {
    case "Enter":
      const displayMessage = document.querySelector(".display-message");
      const anim1 = displayMessage?.animate([{ opacity: 0 }, { opacity: 1 }], {
        duration: 1000,
        fill: "forwards",
      });

      await anim1?.finished;

      const anim2 = displayMessage?.animate(
        [{ transform: "translateX(0px)" }, { transform: "translateX(100px)" }],
        { duration: 500, fill: "forwards" },
      );

      await anim2?.finished;

      console.log("animations finished");
  }
});
