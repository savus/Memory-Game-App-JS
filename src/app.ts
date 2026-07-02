import { API_REQUESTS } from "./api.js";
import { pokeNames } from "./constants.js";
import type { TPokemon } from "./types.js";

export const pokemon: TPokemon[] = [];

API_REQUESTS.fetchAllData(pokeNames).then(() => {
  console.log(pokemon);
});
