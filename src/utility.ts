import { card_container } from "./app.js";
import type { TPokemon } from "./types.js";

export const convertToTSObject = (data: any): TPokemon => {
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
  };
};

export const buildCardHTML = (data: TPokemon) => {
  // <div class="card">
  //   <div class="name">Pikachu</div>
  //   <div class="img-container">
  //     <img
  //       src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
  //       alt=""
  //     />
  //   </div>
  //   <div>Type: Electric</div>
  //   <div class="stats">
  //     <div>hp: 30</div>
  //     <div>attack: 30</div>
  //     <div>defense: 30</div>
  //     <div>special_attack: 30</div>
  //     <div>special_defense: 30</div>
  //     <div>speed: 30</div>
  //   </div>
  // </div>
  const card = document.createElement("div");

  const name = document.createElement("div");
  name.innerHTML = data.name;

  const img_container = document.createElement("img");
  img_container.src = data.img;

  const type = document.createElement("div");
  type.innerHTML = `Type: ${data.type}`;

  card.append(name, img_container, type);

  const stats = document.createElement("div");

  const hp = document.createElement("div");
  hp.innerHTML = `hp: ${data.hp}`;

  const attack = document.createElement("div");
  attack.innerHTML = `attack: ${data.attack}`;

  const defense = document.createElement("div");
  defense.innerHTML = `defense: ${data.defense}`;

  const special_attack = document.createElement("div");
  special_attack.innerHTML = `special_attack: ${data.special_attack}`;

  const special_defense = document.createElement("div");
  special_defense.innerHTML = `special_defense: ${data.special_defense}`;

  const speed = document.createElement("div");
  speed.innerHTML = `speed: ${data.speed}`;

  stats.append(hp, attack, defense, special_attack, special_defense, speed);

  card.append(stats);

  return card;
};

export const populateCard = (data: TPokemon) => {
  const card = buildCardHTML(data);
  return card_container.appendChild(card);
};

export const populateAllCards = (array: TPokemon[]) => {
  array.forEach((mon) => {
    populateCard(mon);
  });
};
