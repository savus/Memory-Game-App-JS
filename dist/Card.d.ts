import type { TPokemon, TPokemon_Dom } from "./types.js";
declare class Card {
    html: TPokemon_Dom;
    cardData: TPokemon;
    facePosition: "up" | "down";
    constructor(htmlData: TPokemon_Dom, cardData: TPokemon);
    flipCardUp: () => void;
    flipCardDown: () => void;
}
export default Card;
//# sourceMappingURL=Card.d.ts.map