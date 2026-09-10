import { incomingPoints, playerPoints } from "./app.js";
import Card from "./Card.js";
import { ACTIVE } from "./constants.js";
import type { TPokemonData } from "./types.js";

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
