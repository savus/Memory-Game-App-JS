import type { TState } from "../types.js";
export declare class StateMachine {
    states: TState[];
    stateNames: string[];
    currentState: TState | null;
    prevState: TState | null;
    constructor(stateNames: string[]);
    initialize: () => void;
    changeState: (newState: string) => void;
}
//# sourceMappingURL=StateMachine.d.ts.map