import Card from "./Card.js";
import type { TPokemon, TPokemon_Dom } from "./types.js";
export declare const convertToTSObject: (data: any) => TPokemon;
export declare const buildCardHTML: (data: TPokemon) => TPokemon_Dom;
export declare const spliceRandomItem: (array: string[]) => string | undefined;
export declare const buildDummyData: (endpoint: string) => TPokemon;
export declare const createAndAppendCard: (data: TPokemon) => TPokemon_Dom;
export declare const createAndAppendAllCards: (array: TPokemon[]) => void;
export declare function shuffleInPlace<T>(array: T[]): T[];
export declare const generateCardData: (array: TPokemon[]) => void;
export declare const wait: (miliseconds: number) => Promise<unknown>;
export declare const flipAllCardsDown: (array: Card[]) => void;
export declare const animateElement: (element: HTMLElement, className: string, animationOrTransition: "animationend" | "transitionend") => Promise<unknown>;
export declare const swapScreens: (elementToActivate: HTMLElement, className: string) => void;
//# sourceMappingURL=utility.d.ts.map