import { pokemonData } from "./app.js";
import { buildDummyData, convertToTSObject } from "./utility.js";
const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";
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