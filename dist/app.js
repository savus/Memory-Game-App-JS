import { API_CONFIG } from "./api.js";
import { pokemonEndpoints } from "./constants.js";
const pokemon = [];
const parsePokemonData = (data) => {
    return {
        name: data.name,
        img: data.sprites.back_default,
        type: data.types[0].type.name,
        hp: data.stats[0].base_stat,
        attack: data.stats[1].base_stat,
        defense: data.stats[2].base_stat,
        special_attack: data.stats[3].base_stat,
        special_defense: data.stats[4].base_stat,
        speed: data.stats[5].base_stat,
    };
};
const fetchData = async (endpointName) => {
    const response = await fetch(`${API_CONFIG.BASE_URL}${endpointName}`);
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