import Card from "./Card.js";
import type { TPokemonData } from "./types.js";
export declare const spliceRandomItem: (array: string[]) => string | undefined;
export declare function shuffleInPlace<T>(array: T[]): T[];
export declare const populateCardDataList: (array: TPokemonData[], arrayToCloneTo: TPokemonData[]) => void;
export declare const wait: (miliseconds: number) => Promise<unknown>;
export declare const flipAllCardsDown: (array: Card[]) => void;
export declare const animateElement: (element: HTMLElement, className: string, animationOrTransition: "animationend" | "transitionend") => Promise<unknown>;
export declare const swapScreens: (elementToActivate: HTMLElement, className: string) => void;
export declare const updatePlayerPoints: (text: string) => void;
export declare const setIncomingPointsText: (points: number, addOrSubtract: "-" | "+") => void;
//# sourceMappingURL=utility.d.ts.map