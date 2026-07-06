import type { TPokemon } from "./types.js";
export declare const convertToTSObject: (data: any) => TPokemon;
export declare const buildCardHTML: (data: TPokemon) => HTMLElement & {
    metaData?: TPokemon;
};
export declare const spliceRandomItem: (array: string[]) => string | undefined;
export declare const buildDummyData: (endpoint: string) => TPokemon;
export declare const populateCard: (data: TPokemon) => HTMLElement & {
    metaData?: TPokemon;
};
export declare const populateAllCards: (array: TPokemon[]) => void;
export declare const displayAllFaceStatuses: () => void;
export declare function shuffleInPlace<T>(array: T[]): T[];
export declare const generateCardData: (array: TPokemon[]) => void;
export declare const wait: (miliseconds: number) => Promise<unknown>;
//# sourceMappingURL=utility.d.ts.map