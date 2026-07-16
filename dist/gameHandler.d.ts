import type Card from "./Card.js";
import type { TGame_State, TPlayer_Choices } from "./types.js";
declare class GameHandler {
    game_state: TGame_State;
    player_choices: TPlayer_Choices;
    level_points: number;
    constructor();
    displayGameMessage: (className: string, message: string) => Promise<void>;
    doPlayerChoicesMatch: () => boolean;
    handlePlayerChoice: (card: Card) => Promise<void>;
    displayRightOrWrongChoice: () => void;
    setFirstChoice: (card: Card) => void;
    resetPlayerChoices: () => [null, null];
    setSecondChoice: (card: Card) => Promise<void>;
    setPlayerPoints: (points: number) => Promise<void>;
    transferPointsAnimation: () => Promise<void>;
}
export default GameHandler;
//# sourceMappingURL=gameHandler.d.ts.map