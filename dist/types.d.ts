export type TPokemon = {
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
export type TPokemon_Dom = HTMLElement & {
    metaData?: TPokemon;
};
export type TGame_State = "choose-card" | "waiting" | "something";
export type TPlayer_Choices = [TPokemon_Dom | null, TPokemon_Dom | null];
export type TGame_Handler = {
    game_state: TGame_State;
    player_choices: TPlayer_Choices;
};
//# sourceMappingURL=types.d.ts.map