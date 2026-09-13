import type { TState } from "../types.js";
import { State } from "./State.js";

export class StateMachine {
  states: TState[];
  stateNames: string[];
  currentState: TState | null = null;
  prevState: TState | null = null;

  constructor(stateNames: string[]) {
    this.states = [];
    this.stateNames = stateNames;
    this.initialize();
  }

  initialize = () => {
    this.stateNames.forEach((name) => {
      const state = new State(name);
      this.states.push(state);
    });

    this.currentState = this.states[0]!;
    this.currentState.enterState();
  };

  changeState = (newState: string) => {
    if (newState === "null" || newState === this.currentState?.stateName)
      return;

    this.prevState = this.currentState;
    this.currentState = this.states.find(
      (state) => state.stateName === newState,
    )!;
    this.currentState.enterState();
  };
}
