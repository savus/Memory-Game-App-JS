export class State {
  stateName: string;

  constructor(name: string) {
    this.stateName = name;
  }

  enterState = () => {
    console.log(`entered ${this.stateName} state!`);
    this.handleEnterStateStep();
  };

  handleEnterStateStep = () => {};

  exitState = () => {
    console.log(`exited ${this.stateName} state`);
    this.handleExitStateStep();
  };

  handleExitStateStep = () => {};
}
