import { State } from "./State.js";
export class StateMachine {
    states;
    stateNames;
    currentState = null;
    prevState = null;
    constructor(stateNames) {
        this.states = [];
        this.stateNames = stateNames;
        this.initialize();
    }
    initialize = () => {
        this.stateNames.forEach((name) => {
            const state = new State(name);
            this.states.push(state);
        });
        this.currentState = this.states[0];
        this.currentState.enterState();
    };
    changeState = (newState) => {
        if (newState === "null" || newState === this.currentState?.stateName)
            return;
        this.prevState = this.currentState;
        this.currentState = this.states.find((state) => state.stateName === newState);
        this.currentState.enterState();
    };
}
//# sourceMappingURL=StateMachine.js.map