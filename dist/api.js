import { pokemonData } from "./app.js";
import { dummyColors, dummyTypes, pokeNames } from "./constants.js";
import { convertToTSObject } from "./utility.js";
const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";
export const API_REQUESTS = {
    fetchData: async (endpoint) => {
        const response = await fetch(`${BASE_URL}${endpoint}`);
        if (!response.ok) {
            console.log("error occured");
            return {
                name: endpoint,
                img: dummyColors[Math.floor(Math.random() * dummyColors.length + 1)],
                type: dummyTypes[Math.floor(Math.random() * dummyTypes.length + 1)],
                hp: "30",
                attack: "30",
                defense: "30",
                special_attack: "30",
                special_defense: "30",
                speed: "30",
                isFaceUp: false,
            };
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