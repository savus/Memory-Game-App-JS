import { allCards, gameMessage, gamePoints, incomingGamePoints, incomingPoints, messageContainer, playerPoints, setGamePoints, setIncomingGamePoints, setWhileLoopFailSafe, whileLoopFailsafe, } from "./app.js";
import { CSS_CLASSES } from "./constants.js";
import { animateElement, flipAllCardsDown, wait } from "./utility.js";
class GameHandler {
    game_state;
    player_choices;
    level_points;
    constructor() {
        this.game_state = "choose-card";
        this.player_choices = [null, null];
        this.level_points = 50;
    }
    displayGameMessage = async (className, message) => {
        gameMessage.innerHTML = message;
        await animateElement(messageContainer, className, "animationend");
        messageContainer.classList.remove(className);
    };
    doPlayerChoicesMatch = () => (this.player_choices[0] && this.player_choices[0].metaData?.name) ===
        (this.player_choices[1] && this.player_choices[1].metaData?.name);
    handlePlayerChoice = async (card) => {
        if (this.game_state === "choose-card") {
            if (card.facePosition === "down") {
                if (this.player_choices[0] === null) {
                    this.setFirstChoice(card);
                }
                else if (this.player_choices[1] === null) {
                    this.setSecondChoice(card);
                }
            }
        }
        else {
            console.log("sorry, you may not click right now");
        }
    };
    displayRightOrWrongChoice = () => {
        if (this.doPlayerChoicesMatch()) {
            this.displayGameMessage(CSS_CLASSES.SLIDE, "There was a match!");
            this.setPlayerPoints(this.level_points);
        }
        else {
            this.displayGameMessage(CSS_CLASSES.SLIDE, "Oops! No Match!");
        }
    };
    setFirstChoice = (card) => {
        this.player_choices[0] = card.html;
        card.flipCardUp();
    };
    resetPlayerChoices = () => (this.player_choices = [null, null]);
    setSecondChoice = async (card) => {
        this.player_choices[1] = card.html;
        this.displayRightOrWrongChoice();
        card.flipCardUp();
        this.game_state = "waiting";
        await wait(2000);
        this.resetPlayerChoices();
        this.game_state = "choose-card";
        flipAllCardsDown(allCards);
    };
    setPlayerPoints = async (points) => {
        setIncomingGamePoints(points);
        playerPoints.innerHTML = `Points: ${gamePoints}`;
        incomingPoints.innerHTML = `+ ${incomingGamePoints}`;
        await animateElement(incomingPoints, CSS_CLASSES.ACTIVE, "transitionend");
        await this.transferPointsAnimation();
        incomingPoints.classList.remove("active");
        setWhileLoopFailSafe(0);
    };
    transferPointsAnimation = async () => {
        while (incomingGamePoints > 0) {
            setWhileLoopFailSafe(whileLoopFailsafe + 1);
            if (whileLoopFailsafe >= 1000)
                return;
            setIncomingGamePoints(incomingGamePoints - 1);
            setGamePoints(gamePoints + 1);
            incomingPoints.innerHTML = `+ ${incomingGamePoints}`;
            playerPoints.innerHTML = `Points: ${gamePoints}`;
            await wait(10);
        }
        return;
    };
}
export default GameHandler;
//# sourceMappingURL=gameHandler.js.map