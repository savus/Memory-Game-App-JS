import { card_container, cardData, dummyColors, dummyTypes } from "./app.js";
import { CSS_CLASSES } from "./constants.js";
import { cardOnClick } from "./eventListeners.js";
export const convertToTSObject = (data) => {
    return {
        name: data.name,
        img: data.sprites.front_default,
        type: data.types[0].type.name,
        hp: data.stats[0].base_stat,
        attack: data.stats[1].base_stat,
        defense: data.stats[2].base_stat,
        special_attack: data.stats[3].base_stat,
        special_defense: data.stats[4].base_stat,
        speed: data.stats[5].base_stat,
        isFaceUp: false,
        isDummyData: false,
    };
};
export const buildCardHTML = (data) => {
    const cardOuter = document.createElement("div");
    const cardBody = document.createElement("div");
    const cardInner = document.createElement("div");
    const name = document.createElement("div");
    const img_container = document.createElement("div");
    const card_img = document.createElement("div");
    const dummy_color = document.createElement("div");
    const img = document.createElement("img");
    const type = document.createElement("div");
    const stats = document.createElement("div");
    const hp = document.createElement("div");
    const attack = document.createElement("div");
    const defense = document.createElement("div");
    const special_attack = document.createElement("div");
    const special_defense = document.createElement("div");
    const speed = document.createElement("div");
    const cardBack = document.createElement("div");
    cardOuter.className = `${CSS_CLASSES.CARD_OUTER} face-down ${data.isDummyData ? "dummy-card" : ""}`;
    cardBody.className = CSS_CLASSES.CARD_BODY;
    cardInner.className = CSS_CLASSES.CARD_INNER;
    name.className = CSS_CLASSES.CARD_NAME;
    name.innerHTML = data.name;
    img_container.className = CSS_CLASSES.IMG_CONTAINER;
    card_img.className = CSS_CLASSES.CARD_IMG;
    dummy_color.className = "dummy-color";
    dummy_color.style.backgroundColor = data.img;
    img.className = CSS_CLASSES.IMG;
    img.src = data.img;
    type.innerHTML = `Type: ${data.type}`;
    stats.className = CSS_CLASSES.STATS;
    hp.innerHTML = `hp: ${data.hp}`;
    attack.innerHTML = `attack: ${data.attack}`;
    defense.innerHTML = `defense: ${data.defense}`;
    special_attack.innerHTML = `special_attack: ${data.special_attack}`;
    special_defense.innerHTML = `special_defense: ${data.special_defense}`;
    speed.innerHTML = `speed: ${data.speed}`;
    cardBack.className = CSS_CLASSES.CARD_BACK;
    card_img.append(img, dummy_color);
    img_container.appendChild(card_img);
    stats.append(hp, attack, defense, special_attack, special_defense, speed);
    cardInner.append(name, img_container, type, stats);
    cardBody.append(cardInner, cardBack);
    cardOuter.appendChild(cardBody);
    cardOuter.metaData = data;
    cardOuter.addEventListener("click", () => {
        cardOnClick(cardOuter);
    });
    return cardOuter;
};
export const spliceRandomItem = (array) => {
    const random = Math.floor(Math.random() * array.length);
    return array.splice(random, 1)[0];
};
export const buildDummyData = (endpoint) => {
    const dummyColor = spliceRandomItem(dummyColors);
    const dummyType = spliceRandomItem(dummyTypes);
    return {
        name: endpoint,
        img: dummyColor,
        type: dummyType,
        hp: "30",
        attack: "30",
        defense: "30",
        special_attack: "30",
        special_defense: "30",
        speed: "30",
        isFaceUp: false,
        isDummyData: true,
    };
};
export const populateCard = (data) => {
    const card = buildCardHTML(data);
    return card_container.appendChild(card);
};
export const populateAllCards = (array) => {
    let shuffledArray = [];
    for (let i = 0; i <= 10; i++) {
        shuffledArray = shuffleInPlace(array);
    }
    shuffledArray.forEach((mon) => {
        populateCard(mon);
    });
};
export const displayAllFaceStatuses = () => {
    console.log(cardData.map((card) => card.isFaceUp));
};
export function shuffleInPlace(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
export const generateCardData = (array) => {
    array.forEach((item) => {
        const clone1 = { ...item };
        const clone2 = { ...item };
        cardData.push(clone1);
        cardData.push(clone2);
    });
};
export const wait = async (miliseconds) => new Promise((resolve) => {
    return setTimeout(resolve, miliseconds);
});
//# sourceMappingURL=utility.js.map