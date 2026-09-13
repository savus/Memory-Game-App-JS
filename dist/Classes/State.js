export class State {
    stateName;
    constructor(name) {
        this.stateName = name;
    }
    enterState = () => {
        console.log(`entered ${this.stateName} state!`);
        this.handleEnterStateStep();
    };
    handleEnterStateStep = () => { };
    exitState = () => {
        console.log(`exited ${this.stateName} state`);
        this.handleExitStateStep();
    };
    handleExitStateStep = () => { };
}
//# sourceMappingURL=State.js.map