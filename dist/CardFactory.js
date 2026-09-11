import { allCards, card_container } from "./app.js";
import Card from "./Card.js";
import { shuffleInPlace } from "./utility.js";
const buildCardHTML = (data) => {
    const card = document.createElement("div");
    card.className = `card-outer face-down ${data.isDummyData ? "dummy-card" : ""}`;
    const cardHTMLString = `<div class="card-body">
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
    </div>`;
    card.insertAdjacentHTML("beforeend", cardHTMLString);
    card.metaData = data;
    return card;
};
export const createAndAppendCard = (data) => {
    const cardHTML = buildCardHTML(data);
    const card = new Card(cardHTML, data);
    allCards.push(card);
    return card_container.appendChild(cardHTML);
};
const createAndAppendAllCards = (array) => {
    let shuffledArray = [];
    for (let i = 0; i <= 10; i++) {
        shuffledArray = shuffleInPlace(array);
    }
    shuffledArray.forEach((mon) => {
        createAndAppendCard(mon);
    });
};
const CardFactory = {
    createAndAppendAllCards,
    createAndAppendCard,
};
export default CardFactory;
//# sourceMappingURL=CardFactory.js.map