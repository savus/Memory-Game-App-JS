import { pokeNames } from "./constants.js";
const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";
const pokemon = [];
const fetchData = async (endpoint) => {
    const response = await fetch(`${BASE_URL}${endpoint}`);
    if (!response.ok)
        return;
    return response.json();
};
const getAllData = (array) => {
    return Promise.all(array.map((name) => fetchData(name))).then((data) => {
        Array.from(data).forEach((mon) => pokemon.push(mon));
    });
};
getAllData(pokeNames).finally(() => {
    alert("done");
    console.log(pokemon);
});
//# sourceMappingURL=app.js.map