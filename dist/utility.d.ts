import type { TPokemon, TPokemon_Dom } from "./types.js";
export declare const convertToTSObject: (data: any) => TPokemon;
export declare const buildCardHTML: (data: TPokemon) => TPokemon_Dom;
export declare const spliceRandomItem: (array: string[]) => string | undefined;
export declare const buildDummyData: (endpoint: string) => TPokemon;
export declare const populateCard: (data: TPokemon) => TPokemon_Dom;
export declare const populateAllCards: (array: TPokemon[]) => void;
export declare const displayAllFaceStatuses: () => void;
export declare function shuffleInPlace<T>(array: T[]): T[];
export declare const generateCardData: (array: TPokemon[]) => void;
export declare const wait: (miliseconds: number) => Promise<unknown>;
//# sourceMappingURL=utility.d.ts.map