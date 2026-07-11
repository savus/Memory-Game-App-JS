import { API_REQUESTS } from "./api.js";
import Card from "./Card.js";
import { CSS_CLASSES, pokeNames } from "./constants.js";
import { buildCardHTML, generateCardData, createAndAppendAllCards, } from "./utility.js";
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
export const allCards = [];
export const pokemonData = [];
export const cardData = [];
export const card_container = document.querySelector(`.${CSS_CLASSES.CARD_CONTAINER}`);
const runGame = async () => {
    generateCardData(pokemonData);
    createAndAppendAllCards(cardData);
};
API_REQUESTS.fetchAllPokemon(pokeNames).finally(() => {
    runGame();
});
document.addEventListener("keyup", (e) => {
    const key = e.key;
    switch (key) {
        case "Enter":
            const displayMessage = document.querySelector(".display-message");
            displayMessage?.classList.toggle("visible");
    }
});
//# sourceMappingURL=app.js.map