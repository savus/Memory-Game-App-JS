import { API_CONFIG } from "./api.js";
const pokemonEndpoints = [
    "ditto",
    "pikachu",
    "mewtwo",
    "bulbasaur",
    "charizard",
    "charmander",
    "gastly",
    "haunter",
    "abra",
    "kadabra",
    "alakazam",
    "staryu",
    "starmie",
    "mew",
    "gardevoir",
    "klefki",
    "articuno",
    "venusaur",
    "gyarados",
    "kabuto",
    "snorlax",
    "muk",
    "grimer",
    "arbok",
    "ninjask",
    "spoofy",
];
const pokemon = [];
const parsePokemonData = (data) => {
    return {
        name: data.name,
    };
};
const fetchData = async (endpointName) => {
    const response = await fetch(`${API_CONFIG.BASE_URL}${endpointName}`);
    if (!response.ok)
        return { name: "Missing mon" };
    const data = (await response.json());
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
//# sourceMappingURL=app.js.map