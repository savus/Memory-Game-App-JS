import type { TPokemon } from "./types.js";

export const convertToTSObject = (data: any): TPokemon => {
  return {
    name: data.name,
  };
};
