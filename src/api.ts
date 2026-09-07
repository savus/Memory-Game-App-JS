import { dummyColors, dummyTypes, pokemonData } from "./app.js";
import type { TApiObject, TPokemonData } from "./types.js";
import { spliceRandomItem } from "./utility.js";

const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";

export const API_REQUESTS: TApiObject = {
  fetchData: async (endpoint) => {
    const response = await fetch(`${BASE_URL}${endpoint}`);

    if (!response.ok) {
      console.log("error occured");

      return API_REQUESTS.buildDummyData(endpoint);
    }

    return API_REQUESTS.convertToTSObject(await response.json());
  },

  fetchAllPokemon: (array) => {
    return Promise.all(array.map((name) => API_REQUESTS.fetchData(name))).then(
      (data) => {
        Array.from(data).forEach((mon) => pokemonData.push(mon));
        return data;
      },
    );
  },

  buildDummyData(endpoint): TPokemonData {
    const dummyColor = spliceRandomItem(dummyColors)!;

    const dummyType = spliceRandomItem(dummyTypes)!;

    const getRandomNum = () => Math.floor(Math.random() * 100 + 1);
    return {
      name: endpoint,
      img: dummyColor,
      type: dummyType,
      hp: `${getRandomNum()}`,
      attack: `${getRandomNum()}`,
      defense: `${getRandomNum()}`,
      special_attack: `${getRandomNum()}`,
      special_defense: `${getRandomNum()}`,
      speed: `${getRandomNum()}`,
      isDummyData: true,
    };
  },

  convertToTSObject: (data: any): TPokemonData => {
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
      isDummyData: false,
    };
  },
};
