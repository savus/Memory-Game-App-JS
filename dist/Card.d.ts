import type { TPokemonData, TPokemonDom } from "./types.js";
declare class Card {
    html: TPokemonDom;
    cardData: TPokemonData;
    facePosition: "up" | "down";
    constructor(htmlData: TPokemonDom, cardData: TPokemonData);
    flipCardUp: () => void;
    flipCardDown: () => void;
}
export default Card;
//# sourceMappingURL=Card.d.ts.map