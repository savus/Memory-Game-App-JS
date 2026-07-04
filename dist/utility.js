import { card_container, cardData } from "./app.js";
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
    };
};
export const buildCardHTML = (data) => {
    // <div class="card-outer">
    //   <div class="card-inner">
    //     <div class="name">Pikachu</div>
    //     <div class="img-container">
    //       <div class="card-img">
    //         <img
    //           src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
    //           alt=""
    //         />
    //       </div>
    //     </div>
    //     <div>Type: Electric</div>
    //     <div class="stats">
    //       <div>hp: 30</div>
    //       <div>attack: 30</div>
    //       <div>defense: 30</div>
    //       <div>special_attack: 30</div>
    //       <div>special_defense: 30</div>
    //       <div>speed: 30</div>
    //     </div>
    //   </div>
    //   <div class="card-back"></div>
    // </div>
    const cardOuter = document.createElement("div");
    const cardBody = document.createElement("div");
    const cardInner = document.createElement("div");
    const name = document.createElement("div");
    const img_container = document.createElement("div");
    const card_img = document.createElement("div");
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
    cardOuter.className = `${CSS_CLASSES.CARD_OUTER} face-down`;
    cardBody.className = CSS_CLASSES.CARD_BODY;
    cardInner.className = CSS_CLASSES.CARD_INNER;
    name.className = CSS_CLASSES.CARD_NAME;
    name.innerHTML = data.name;
    img_container.className = CSS_CLASSES.IMG_CONTAINER;
    card_img.className = CSS_CLASSES.CARD_IMG;
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
    card_img.appendChild(img);
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
export const populateCard = (data) => {
    const card = buildCardHTML(data);
    console.log(card.metaData?.isFaceUp);
    return card_container.appendChild(card);
};
export const populateAllCards = (array) => {
    array.forEach((mon) => {
        populateCard(mon);
    });
};
export const displayAllFaceStatuses = () => {
    console.log(cardData.map((card) => card.isFaceUp));
};
//# sourceMappingURL=utility.js.map