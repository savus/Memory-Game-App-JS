const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";
export const getData = async (pokeName) => {
    const response = await fetch(`${BASE_URL}${pokeName}`);
    const data = await response.json();
    return data;
};
//# sourceMappingURL=app.js.map