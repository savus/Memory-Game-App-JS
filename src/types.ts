import type Card from "./Card.js";

export type TPokemonData = {
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

export type TApiObject = {
  fetchData: (endpoint: string) => Promise<TPokemonData>;
  fetchAllPokemon: (
    array: string[],
    arrayToStore: TPokemonData[],
  ) => Promise<TPokemonData[]>;
  buildDummyData: (endpoint: string) => TPokemonData;
  convertToTSObject: (data: any) => TPokemonData;
};

export type TGameState = "choose-card" | "waiting" | "something";
export type TPlayerChoices = [TPokemonDom | null, TPokemonDom | null];

export type TPokemonDom = HTMLElement & { metaData?: TPokemonData };

export type THTMLElement = HTMLElement;
