import type Card from "./Card.js";
export type TPokemonData = {
    name: string;
    img: string;
    type: string;
    hp: string;
    attack: string;
    defense: string;
    special_attack: string;
    special_defense: string;
    speed: string;
    isDummyData: boolean;
};
export type TApiObject = {
    fetchData: (endpoint: string) => Promise<TPokemonData>;
    fetchAllPokemon: (array: string[], arrayToStore: TPokemonData[]) => Promise<TPokemonData[]>;
    buildDummyData: (endpoint: string) => TPokemonData;
    convertToTSObject: (data: any) => TPokemonData;
};
export type TGameHandler = {
    game_state: TGame_State;
    player_choices: TPlayer_Choices;
    level_points: number;
    choices_matched: boolean;
    initializeApp: (apiObject: TApiObject, names: string[], arrayToStore: TPokemonData[]) => void;
    startMemoryGame: () => void;
    displayGameMessage: (className: string, message: string) => void;
    doPlayerChoicesMatch: () => boolean;
    handlePlayerChoice: (card: Card) => void;
    displayRightOrWrongChoice: () => void;
    setFirstChoice: (card: Card) => void;
    resetPlayerChoices: () => void;
    setSecondChoice: (card: Card) => void;
    setPlayerPoints: (point: string) => void;
    transferPointsAnimation: () => void;
};
export type TPokemon_Dom = HTMLElement & {
    metaData?: TPokemonData;
};
export type TGame_State = "choose-card" | "waiting" | "something";
export type TPlayer_Choices = [TPokemon_Dom | null, TPokemon_Dom | null];
export type THTML_Element = HTMLElement;
//# sourceMappingURL=types.d.ts.map