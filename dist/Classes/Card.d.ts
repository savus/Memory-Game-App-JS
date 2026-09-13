import type { TPokemonData, TPokemonDom } from "../types.js";
import { StateMachine } from "./StateMachine.js";
type TCardState = {
    isClickable: boolean;
    facePosition: "up" | "down";
    isFlippable: boolean;
};
declare class Card {
    html: TPokemonDom;
    cardData: TPokemonData;
    state: TCardState;
    stateMachine: StateMachine;
    constructor(htmlData: TPokemonDom, cardData: TPokemonData);
    flipCard: (direction?: "up" | "down" | "toggle", ignoreState?: boolean) => void;
    selectCard: () => void;
    deSelectCard: () => Promise<void>;
}
export default Card;
//# sourceMappingURL=Card.d.ts.map