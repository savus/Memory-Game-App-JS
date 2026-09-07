import type { TPokemonData, TPokemon_Dom } from "./types.js";
declare class Card {
    html: TPokemon_Dom;
    cardData: TPokemonData;
    facePosition: "up" | "down";
    constructor(htmlData: TPokemon_Dom, cardData: TPokemonData);
    flipCardUp: () => void;
    flipCardDown: () => void;
}
export default Card;
//# sourceMappingURL=Card.d.ts.map