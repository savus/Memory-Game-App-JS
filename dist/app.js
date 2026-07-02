import { pokeNames } from "./constants.js";
const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";
const pokemon = [];
const convertToTSObject = (data) => {
    return {
        name: data.name,
    };
};
const fetchData = async (endpoint) => {
    const response = await fetch(`${BASE_URL}${endpoint}`);
    if (!response.ok)
        return {
            name: "unknown",
        };
    return convertToTSObject(await response.json());
};
const fetchAllData = (array) => {
    return Promise.all(array.map((name) => fetchData(name))).then((data) => {
        Array.from(data).forEach((mon) => pokemon.push(mon));
    });
};
fetchAllData(pokeNames).then(() => {
    console.log(pokemon);
});
//# sourceMappingURL=app.js.map