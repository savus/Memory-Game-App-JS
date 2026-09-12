import type { TPokemonData, TPokemonDom } from "./types.js";
type TCardState = {
    isClickable: boolean;
    facePosition: "up" | "down";
    isFlippable: boolean;
};
declare class Card {
    html: TPokemonDom;
    cardData: TPokemonData;
    state: TCardState;
    constructor(htmlData: TPokemonDom, cardData: TPokemonData);
    flipCard: (direction?: "up" | "down" | "toggle", ignoreState?: boolean) => void;
    chooseCard: () => void;
    unChooseCard: () => void;
}
export default Card;
//# sourceMappingURL=Card.d.ts.map