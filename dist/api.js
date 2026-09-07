import { dummyColors, dummyTypes } from "./app.js";
import { spliceRandomItem } from "./utility.js";
const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";
const fetchData = async (endpoint) => {
    const response = await fetch(`${BASE_URL}${endpoint}`);
    if (!response.ok) {
        console.log("error occured");
        return buildDummyData(endpoint);
    }
    return convertToTSObject(await response.json());
};
const fetchAllPokemon = (array, arrayToStore) => {
    return Promise.all(array.map((name) => fetchData(name))).then((data) => {
        Array.from(data).forEach((mon) => arrayToStore.push(mon));
        return data;
    });
};
const buildDummyData = (endpoint) => {
    const dummyColor = spliceRandomItem(dummyColors);
    const dummyType = spliceRandomItem(dummyTypes);
    const getRandomNum = () => Math.floor(Math.random() * 100 + 1);
    return {
        name: endpoint,
        img: dummyColor,
        type: dummyType,
        hp: `${getRandomNum()}`,
        attack: `${getRandomNum()}`,
        defense: `${getRandomNum()}`,
        special_attack: `${getRandomNum()}`,
        special_defense: `${getRandomNum()}`,
        speed: `${getRandomNum()}`,
        isDummyData: true,
    };
};
const convertToTSObject = (data) => {
    return {
        name: data.name,
        img: data.sprites.front_default,
        type: data.types[0].type.name,
        hp: data.stats[0].base_stat,
        attack: data.stats[1].base_stat,
        defense: data.stats[2].base_stat,
        special_attack: data.stats[3].base_stat,
        special_defense: data.stats[4].base_stat,
        speed: data.stats[5].base_stat,
        isDummyData: false,
    };
};
const API_REQUESTS = {
    fetchData,
    fetchAllPokemon,
    buildDummyData,
    convertToTSObject,
};
export default API_REQUESTS;
//# sourceMappingURL=api.js.map