import API_REQUESTS from "./api.js";
import { pokemonEndpoints } from "./constants.js";
export const pokemon = [];
export const parsePokemonData = (data) => {
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
API_REQUESTS.getAllData(pokemonEndpoints);
//# sourceMappingURL=app.js.map