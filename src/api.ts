import { pokemon } from "./app.js";
import type { TPokemon } from "./types.js";
import { convertToTSObject } from "./utility.js";

const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";

export const API_REQUESTS = {
  fetchData: async (endpoint: string): Promise<TPokemon> => {
    const response = await fetch(`${BASE_URL}${endpoint}`);

    if (!response.ok)
      return {
        name: "unknown",
        hp: "30",
        attack: "30",
        defense: "30",
        special_attack: "30",
        special_defense: "30",
        speed: "30",
      };

    return convertToTSObject(await response.json());
  },

  fetchAllData: (array: string[]) => {
    return Promise.all(array.map((name) => API_REQUESTS.fetchData(name))).then(
      (data) => {
        Array.from(data).forEach((mon) => pokemon.push(mon));
      },
    );
  },
};
