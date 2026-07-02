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
