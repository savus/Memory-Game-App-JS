import type Card from "./Card.js";

export type TPokemon = {
  name: string;
  img: string;
  type: string;
  hp: string;
  attack: string;
  defense: string;
  special_attack: string;
  special_defense: string;
  speed: string;
  isDummyData: boolean;
};

export type TPokemon_Dom = HTMLElement & { metaData?: TPokemon };

export type TGame_State = "choose-card" | "waiting" | "something";
export type TPlayer_Choices = [TPokemon_Dom | null, TPokemon_Dom | null];
