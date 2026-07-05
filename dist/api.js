import { pokemonData } from "./app.js";
import { dummyColors, dummyTypes, pokeNames } from "./constants.js";
import { convertToTSObject } from "./utility.js";
const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";
export const spliceRandomItem = (array) => {
    const random = Math.floor(Math.random() * array.length);
    return array.splice(random, 1)[0];
};
export const buildDummyData = (endpoint) => {
    const dummyColor = spliceRandomItem(dummyColors);
    const dummyType = spliceRandomItem(dummyTypes);
    return {
        name: endpoint,
        img: dummyColor,
        type: dummyType,
        hp: "30",
        attack: "30",
        defense: "30",
        special_attack: "30",
        special_defense: "30",
        speed: "30",
        isFaceUp: false,
        isDummyData: true,
    };
};
export const API_REQUESTS = {
    fetchData: async (endpoint) => {
        const response = await fetch(`${BASE_URL}${endpoint}`);
        if (!response.ok) {
            console.log("error occured");
            return buildDummyData(endpoint);
        }
        return convertToTSObject(await response.json());
    },
    fetchAllPokemon: (array) => {
        return Promise.all(array.map((name) => API_REQUESTS.fetchData(name))).then((data) => {
            Array.from(data).forEach((mon) => pokemonData.push(mon));
        });
    },
};
//# sourceMappingURL=api.js.map