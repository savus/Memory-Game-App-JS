import { parsePokemonData, pokemon } from "./app.js";
const BASE_URL = `https://pokeapi.co/api/v2/pokemon/`;
const API_REQUESTS = {
    fetchData: async (endpointName) => {
        const response = await fetch(`${BASE_URL}${endpointName}`);
        if (!response.ok)
            return {
                name: endpointName,
                img: "",
                type: "bow-zonga",
                hp: 10,
                attack: 20,
                defense: 30,
                special_attack: 40,
                special_defense: 50,
                speed: 60,
            };
        const data = (await response.json());
        return parsePokemonData(data);
    },
    getAllData: (array) => {
        Promise.all(array.map((name) => API_REQUESTS.fetchData(name)))
            .then((data) => {
            Array.from(data).forEach((mon) => pokemon.push(mon));
        })
            .then(() => console.log(pokemon));
    },
};
export default API_REQUESTS;
//# sourceMappingURL=api.js.map