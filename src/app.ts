import { pokeNames } from "./constants.js";

type TPokemon = {
  name: string;
};

const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";
const pokemon: TPokemon[] = [];

const convertToTSObject = (data: any): TPokemon => {
  return {
    name: data.name,
  };
};

const fetchData = async (endpoint: string): Promise<TPokemon> => {
  const response = await fetch(`${BASE_URL}${endpoint}`);

  if (!response.ok)
    return {
      name: "unknown",
    };

  return convertToTSObject(await response.json());
};

const fetchAllData = (array: string[]) => {
  return Promise.all(array.map((name) => fetchData(name))).then((data) => {
    Array.from(data).forEach((mon) => pokemon.push(mon));
  });
};

fetchAllData(pokeNames).then(() => {
  console.log(pokemon);
});
