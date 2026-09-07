import type { TPokemonData } from "./types.js";
export declare const API_REQUESTS: {
    fetchData: (endpoint: string) => Promise<TPokemonData>;
    fetchAllPokemon: (array: string[]) => Promise<void>;
    buildDummyData(endpoint: string): TPokemonData;
    convertToTSObject: (data: any) => TPokemonData;
};
//# sourceMappingURL=api.d.ts.map