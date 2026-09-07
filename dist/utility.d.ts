import Card from "./Card.js";
import type { TPokemonData } from "./types.js";
export declare const buildCardHTML: (data: TPokemonData) => void;
export declare const spliceRandomItem: (array: string[]) => string | undefined;
export declare const createAndAppendCard: (data: TPokemonData) => void;
export declare const createAndAppendAllCards: (array: TPokemonData[]) => void;
export declare function shuffleInPlace<T>(array: T[]): T[];
export declare const generateCardData: (array: TPokemonData[]) => void;
export declare const wait: (miliseconds: number) => Promise<unknown>;
export declare const flipAllCardsDown: (array: Card[]) => void;
export declare const animateElement: (element: HTMLElement, className: string, animationOrTransition: "animationend" | "transitionend") => Promise<unknown>;
export declare const swapScreens: (elementToActivate: HTMLElement, className: string) => void;
export declare const writePlayerPoints: (text: string) => void;
export declare const setIncomingPointsText: (points: number, addOrSubtract: "-" | "+") => void;
//# sourceMappingURL=utility.d.ts.map