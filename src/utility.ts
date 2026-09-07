import {
  allCards,
  card_container,
  cardData,
  dummyColors,
  dummyTypes,
  gamePoints,
  incomingGamePoints,
  incomingPoints,
  playerPoints,
} from "./app.js";
import Card from "./Card.js";
import { ACTIVE } from "./constants.js";
import type { TPokemonData } from "./types.js";

export const buildCardHTML = (data: TPokemonData) => {
  // const cardOuter: TPokemonData_Dom = document.createElement("div");
  // const cardBody = document.createElement("div");
  // const cardInner = document.createElement("div");
  // const name = document.createElement("div");
  // const img_container = document.createElement("div");
  // const card_img = document.createElement("div");
  // const dummy_color = document.createElement("div");
  // const img = document.createElement("img");
  // const type = document.createElement("div");
  // const stats = document.createElement("div");
  // const hp = document.createElement("div");
  // const attack = document.createElement("div");
  // const defense = document.createElement("div");
  // const special_attack = document.createElement("div");
  // const special_defense = document.createElement("div");
  // const speed = document.createElement("div");
  // const cardBack = document.createElement("div");
  // cardOuter.className = `${CSS_CLASSES} ${CSS_CLASSES.FACE_DOWN} ${data.isDummyData ? CSS_CLASSES.DUMMY_CARD : ""}`;
  // cardBody.className = CSS_CLASSES.CARD_BODY;
  // cardInner.className = CSS_CLASSES.CARD_INNER;
  // name.className = CSS_CLASSES.CARD_NAME;
  // name.innerHTML = data.name;
  // img_container.className = CSS_CLASSES.IMG_CONTAINER;
  // card_img.className = CSS_CLASSES.CARD_IMG;
  // dummy_color.className = CSS_CLASSES.DUMMY_COLOR;
  // dummy_color.style.backgroundColor = data.img;
  // img.className = CSS_CLASSES.IMG;
  // img.src = data.img;
  // type.innerHTML = `Type: ${data.type}`;
  // stats.className = CSS_CLASSES.STATS;
  // hp.innerHTML = `hp: ${data.hp}`;
  // attack.innerHTML = `attack: ${data.attack}`;
  // defense.innerHTML = `defense: ${data.defense}`;
  // special_attack.innerHTML = `special_attack: ${data.special_attack}`;
  // special_defense.innerHTML = `special_defense: ${data.special_defense}`;
  // speed.innerHTML = `speed: ${data.speed}`;
  // cardBack.className = CSS_CLASSES.CARD_BACK;
  // card_img.append(img, dummy_color);
  // img_container.appendChild(card_img);
  // stats.append(hp, attack, defense, special_attack, special_defense, speed);
  // cardInner.append(name, img_container, type, stats);
  // cardBody.append(cardInner, cardBack);
  // cardOuter.appendChild(cardBody);
  // cardOuter.metaData = data;
  // return cardOuter;
};

export const spliceRandomItem = (array: string[]) => {
  const random = Math.floor(Math.random() * array.length);

  return array.splice(random, 1)[0];
};

export const createAndAppendCard = (data: TPokemonData) => {
  // const cardHTML = buildCardHTML(data);
  // const card = new Card(cardHTML, data);
  // allCards.push(card);
  // return card_container.appendChild(cardHTML);
};

export const createAndAppendAllCards = (array: TPokemonData[]) => {
  let shuffledArray: TPokemonData[] = [];

  for (let i = 0; i <= 10; i++) {
    shuffledArray = shuffleInPlace(array);
  }

  shuffledArray.forEach((mon) => {
    createAndAppendCard(mon);
  });
};

export function shuffleInPlace<T>(array: T[]): T[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j]!, array[i]!];
  }
  return array;
}

export const populateCardDataList = (array: TPokemonData[]) => {
  array.forEach((item) => {
    const clone1 = { ...item };
    const clone2 = { ...item };
    cardData.push(clone1);
    cardData.push(clone2);
  });
};

export const wait = async (miliseconds: number) =>
  new Promise((resolve) => {
    return setTimeout(resolve, miliseconds);
  });

export const flipAllCardsDown = (array: Card[]) => {
  array.forEach((card) => {
    card.flipCardDown();
  });
};

export const animateElement = async (
  element: HTMLElement,
  className: string,
  animationOrTransition: "animationend" | "transitionend",
) =>
  new Promise((resolve) => {
    const handleListenerEnd = () => {
      element.removeEventListener(animationOrTransition, handleListenerEnd);
      resolve(element);
    };

    element.addEventListener(animationOrTransition, handleListenerEnd);

    element.classList.add(className);
  });

export const swapScreens = (
  elementToActivate: HTMLElement,
  className: string,
) => {
  const elementToDeactivate = document.querySelector(`.${className}.${ACTIVE}`);
  if (elementToDeactivate !== null) {
    elementToDeactivate.classList.remove(ACTIVE);
  }
  elementToActivate.classList.add(ACTIVE);
};

export const updatePlayerPoints = (text: string) => {
  playerPoints.innerHTML = text;
};

export const setIncomingPointsText = (
  points: number,
  addOrSubtract: "-" | "+",
) => {
  incomingPoints.innerHTML = `${addOrSubtract} ${points}`;
};
