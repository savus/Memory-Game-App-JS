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
import type { TPokemonData, TPokemonDom } from "./types.js";

export const buildCardHTML = (data: TPokemonData) => {
  // const card = document.createElement("div");
  // card.innerHTML = `<div class="face-down ${data.isDummyData ? "dummy-card" : ""}">
  //   <div class="card-body">
  //     <div class="card-inner">
  //       <div class="card-name">${data.name}</div>
  //       <div class="img-container">
  //         <div class="card-img">
  //           <img
  //             class="img"
  //             src="${data.img}"
  //           />
  //           <div class="dummy-color" style={${data.isDummyData ? data.img : ""}></div>
  //         </div>
  //       </div>
  //       <div>Type: ${data.type}</div>
  //       <div class="stats">
  //         <div>hp: ${data.hp}</div>
  //         <div>attack: ${data.attack}</div>
  //         <div>defense: ${data.defense}</div>
  //         <div>special_attack: ${data.special_attack}</div>
  //         <div>special_defense: ${data.special_defense}</div>
  //         <div>speed: ${data.speed}</div>
  //       </div>
  //     </div>
  //     <div class="card-back"></div>
  //   </div>
  // </div>`;
  // card.metaData = data;
  // return card;
  // const cardOuter: TPokemonDom = document.createElement("div");
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
  // cardOuter.className = `face-down ${data.isDummyData ? "dummy-card" : ""}`;
  // cardBody.className = "card-body";
  // cardInner.className = "card-inner";
  // name.className = "card-name";
  // name.innerHTML = data.name;
  // img_container.className = "img-container";
  // card_img.className = "card-img";
  // dummy_color.className = "dummy-color";
  // dummy_color.style.backgroundColor = data.img;
  // img.className = "img";
  // img.src = data.img;
  // type.innerHTML = `Type: ${data.type}`;
  // stats.className = "stats";
  // hp.innerHTML = `hp: ${data.hp}`;
  // attack.innerHTML = `attack: ${data.attack}`;
  // defense.innerHTML = `defense: ${data.defense}`;
  // special_attack.innerHTML = `special_attack: ${data.special_attack}`;
  // special_defense.innerHTML = `special_defense: ${data.special_defense}`;
  // speed.innerHTML = `speed: ${data.speed}`;
  // cardBack.className = "card-back";
  // card_img.append(img, dummy_color);
  // img_container.appendChild(card_img);
  // stats.append(hp, attack, defense, special_attack, special_defense, speed);
  // cardInner.append(name, img_container, type, stats);
  // cardBody.append(cardInner, cardBack);
  // cardOuter.appendChild(cardBody);
  const card = `<div class="face-down ${data.isDummyData ? "dummy-card" : ""}">
    <div class="card-body">
      <div class="card-inner">
        <div class="card-name">${data.name}</div>
        <div class="img-container">
          <div class="card-img">
            <img
              class="img"
              src="${data.img}"
            />
            <div class="dummy-color" style={${data.isDummyData ? data.img : ""}></div>
          </div>
        </div>
        <div>Type: ${data.type}</div>
        <div class="stats">
          <div>hp: ${data.hp}</div>
          <div>attack: ${data.attack}</div>
          <div>defense: ${data.defense}</div>
          <div>special_attack: ${data.special_attack}</div>
          <div>special_defense: ${data.special_defense}</div>
          <div>speed: ${data.speed}</div>
        </div>
      </div>
      <div class="card-back"></div>
    </div>
  </div>`;
  return card;
};

export const createAndAppendCard = (data: TPokemonData) => {
  const cardHTMLString = buildCardHTML(data);
  const cardHTML: TPokemonDom = document.createElement("div");
  cardHTML.metaData = data;
  cardHTML.insertAdjacentHTML("beforeend", cardHTMLString);
  const card = new Card(cardHTML, data);
  allCards.push(card);
  return card_container.appendChild(cardHTML);
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

export const spliceRandomItem = (array: string[]) => {
  const random = Math.floor(Math.random() * array.length);

  return array.splice(random, 1)[0];
};

export function shuffleInPlace<T>(array: T[]): T[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j]!, array[i]!];
  }
  return array;
}

export const populateCardDataList = (
  array: TPokemonData[],
  arrayToCloneTo: TPokemonData[],
) => {
  array.forEach((item) => {
    const clone1 = { ...item };
    const clone2 = { ...item };
    arrayToCloneTo.push(clone1);
    arrayToCloneTo.push(clone2);
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
