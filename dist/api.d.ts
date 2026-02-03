import type { TPokemon } from "./types.js";
declare const API_REQUESTS: {
    fetchData: (endpointName: string) => Promise<TPokemon>;
    getAllData: (array: string[]) => void;
};
export default API_REQUESTS;
//# sourceMappingURL=api.d.ts.map