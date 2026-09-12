import type Card from "./Card.js";
import type { TApiObject, TGameState, TPokemonData } from "./types.js";
export declare const GameHandler: {
    state: TGameState;
    playerChoices: {
        firstChoice: Card | null;
        secondChoice: Card | null;
    };
    levelPoints: number;
    choicesMatched: boolean;
    initializeApp: (apiObject: TApiObject, pokemonNames: string[], arrayToStore: TPokemonData[]) => Promise<TPokemonData[]>;
    startMemoryGame: () => Promise<void>;
    displayGameMessage: (className: string, message: string) => Promise<void>;
    doPlayerChoicesMatch: () => boolean;
    handlePlayerChoice: (card: Card) => Promise<void>;
    displayRightOrWrongChoice: () => void;
    setFirstChoice: (card: Card) => void;
    setSecondChoice: (card: Card) => Promise<void>;
    setPlayerPoints: (points: string | number) => Promise<void>;
    animateTransferringPoints: () => Promise<void>;
    resetPlayerChoices: () => void;
};
export default GameHandler;
//# sourceMappingURL=gameHandler.d.ts.map