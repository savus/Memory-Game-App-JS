import { API_REQUESTS } from "./api.js";
import { CSS_CLASSES, pokeNames } from "./constants.js";
import { displayAllFaceStatuses, populateAllCards } from "./utility.js";
export const card_container = document.querySelector(`.${CSS_CLASSES.CARD_CONTAINER}`);
export const pokemonData = [];
export const cardData = [];
const generateCardData = (array) => {
    array.forEach((item) => {
        const clone1 = { ...item };
        const clone2 = { ...item };
        cardData.push(clone1);
        cardData.push(clone2);
    });
};
const runGame = () => {
    generateCardData(pokemonData);
    populateAllCards(cardData);
};
API_REQUESTS.fetchAllPokemon(pokeNames).finally(runGame);
document.addEventListener("keyup", (e) => {
    const key = e.key;
    if (key === "Enter")
        displayAllFaceStatuses();
});
//# sourceMappingURL=app.js.map