import type { TPokemon } from "./types.js";
export declare const spliceRandomItem: (array: string[]) => string | undefined;
export declare const buildDummyData: (endpoint: string) => TPokemon;
export declare const API_REQUESTS: {
    fetchData: (endpoint: string) => Promise<TPokemon>;
    fetchAllPokemon: (array: string[]) => Promise<void>;
};
//# sourceMappingURL=api.d.ts.map