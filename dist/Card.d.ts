import type { TPokemonData, TPokemonDom } from "./types.js";
type TCardState = {
    isClickable: boolean;
    facePosition: "up" | "down";
};
declare class Card {
    html: TPokemonDom;
    cardData: TPokemonData;
    state: TCardState;
    constructor(htmlData: TPokemonDom, cardData: TPokemonData);
    flipCardUp: () => void;
    flipCardDown: () => void;
}
export default Card;
//# sourceMappingURL=Card.d.ts.map