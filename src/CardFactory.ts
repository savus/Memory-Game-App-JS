import type { TPokemonData } from "./types.js";
import { shuffleInPlace } from "./utility.js";

const createAndAppendAllCards = (array: TPokemonData[]) => {
  let shuffledArray: TPokemonData[] = [];

  for (let i = 0; i <= 10; i++) {
    shuffledArray = shuffleInPlace(array);
  }

  shuffledArray.forEach((mon) => {
    createAndAppendCard(mon);
  });
};

const createAndAppendCard = (data: TPokemonData) => {
  // const cardHTML = buildCardHTML(data);
  // const card = new Card(cardHTML, data);
  // allCards.push(card);
  // return card_container.appendChild(cardHTML);
};

const CardFactory = {
  createAndAppendAllCards,
  createAndAppendCard,
};

export default CardFactory;
