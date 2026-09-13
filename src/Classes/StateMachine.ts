import type { TState } from "../types.js";

export class StateMachine {
  states: TState[];
  stateNames: string[];
  constructor(stateNames: string[]) {
    this.states = [];
    this.stateNames = stateNames;

    this.initialize();
  }

  initialize = () => {};
}
