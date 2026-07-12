import { API_REQUESTS } from "./api.js";
import Card from "./Card.js";
import { CSS_CLASSES, pokeNames } from "./constants.js";
import { buildCardHTML, generateCardData, createAndAppendAllCards, wait, } from "./utility.js";
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
document.addEventListener("keyup", async (e) => {
    const key = e.key;
    switch (key) {
        case "Enter":
            const gameMessage = document.querySelector(".game-message");
            const displayMessage = document.querySelector(".display-message");
            function transitionElement(element, className, addOrRemove) {
                return new Promise((resolve) => {
                    const handleTransitionEnd = () => {
                        element.removeEventListener("transitionend", handleTransitionEnd);
                        resolve(element);
                    };
                    element.addEventListener("transitionend", handleTransitionEnd);
                    addOrRemove
                        ? element.classList.add(className)
                        : element.classList.remove(className);
                });
            }
            await transitionElement(gameMessage, "visible", true);
            await transitionElement(displayMessage, "showtime", true);
            await wait(300);
            await transitionElement(displayMessage, "showtime", false);
            await transitionElement(gameMessage, "visible", false);
            await wait(300);
            await transitionElement(gameMessage, "visible", true);
            await transitionElement(displayMessage, "showtime", true);
            // const anim1 = gameMessage?.animate(
            //   {
            //     opacity: [0, 1],
            //     transform: ["translateX(-100px)", "translateX(0)"],
            //   },
            //   {
            //     fill: "forwards",
            //     duration: 500,
            //   },
            // );
            // await anim1?.finished;
            // gameMessage?.classList.add("showtime");
            // await wait(1000);
            // gameMessage?.classList.remove("showtime");
            // await wait(500);
            // const anim2 = gameMessage?.animate(
            //   {
            //     opacity: [1, 0],
            //     transform: ["translateX(0)", "translateX(-100px)"],
            //   },
            //   {
            //     fill: "forwards",
            //     duration: 500,
            //   },
            // );
            // await anim2?.finished;
            // const anim1 = displayMessage?.animate(
            //   {
            //     opacity: [0, 1],
            //     transform: ["scale(0)", "scale(1)"],
            //   },
            //   {
            //     fill: "forwards",
            //     duration: 1000,
            //   },
            // );
            // await anim1?.finished;
            // const anim2 = displayMessage?.animate(
            //   {
            //     opacity: [1, 0],
            //     transform: ["translateX(0)", "translateX(100px)"],
            //   },
            //   {
            //     fill: "forwards",
            //     duration: 1000,
            //   },
            // );
            // await anim2?.finished;
            // alert("Animations finished");
            // const anim1 = displayMessage?.animate([{ opacity: 0 }, { opacity: 1 }], {
            //   duration: 1000,
            //   fill: "forwards",
            // });
            // await anim1?.finished;
            // const anim2 = displayMessage?.animate(
            //   [{ transform: "translateX(0px)" }, { transform: "translateX(100px)" }],
            //   { duration: 500, fill: "forwards" },
            // );
            // await anim2?.finished;
            console.log("animations finished");
    }
});
//# sourceMappingURL=app.js.map