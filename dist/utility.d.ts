import type { TPokemon } from "./types.js";
export declare const convertToTSObject: (data: any) => TPokemon;
export declare const buildCardHTML: (data: TPokemon) => HTMLElement & {
    metaData?: TPokemon;
};
export declare const populateCard: (data: TPokemon) => HTMLElement & {
    metaData?: TPokemon;
};
export declare const populateAllCards: (array: TPokemon[]) => void;
export declare const displayAllFaceStatuses: () => void;
//# sourceMappingURL=utility.d.ts.map