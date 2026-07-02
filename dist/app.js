import { API_REQUESTS } from "./api.js";
import { pokeNames } from "./constants.js";
export const pokemon = [];
API_REQUESTS.fetchAllData(pokeNames).then(() => {
    console.log(pokemon);
});
//# sourceMappingURL=app.js.map