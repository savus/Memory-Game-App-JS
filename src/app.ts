import { API_CONFIG } from "./api.js";
import { pokemonEndpoints } from "./constants.js";
import type { TPokemon } from "./types.js";

const pokemon: TPokemon[] = [];

const parsePokemonData = (data: any): TPokemon => {
  return {
    name: data.name,
  };
};

const fetchData = async (endpointName: string): Promise<TPokemon> => {
  const response = await fetch(`${API_CONFIG.BASE_URL}${endpointName}`);

  if (!response.ok) return { name: endpointName };

  const data = (await response.json()) as TPokemon;

  return parsePokemonData(data);
};

const getAllData = () => {
  Promise.all(pokemonEndpoints.map((name) => fetchData(name)))
    .then((data) => {
      Array.from(data).forEach((mon) => pokemon.push(mon));
    })
    .then(() => console.log(pokemon));
};

getAllData();
