import {
  allCards,
  gameMessage,
  gamePoints,
  incomingGamePoints,
  incomingPoints,
  messageContainer,
  playerPoints,
  setGamePoints,
  setIncomingGamePoints,
  setWhileLoopFailSafe,
  whileLoopFailsafe,
} from "./app.js";
import type Card from "./Card.js";
import { CSS_CLASSES } from "./constants.js";
import type { TGame_State, TPlayer_Choices } from "./types.js";
import { animateElement, flipAllCardsDown, wait } from "./utility.js";

class GameHandler {
  game_state: TGame_State;
  player_choices: TPlayer_Choices;
  level_points: number;

  constructor() {
    this.game_state = "choose-card";
    this.player_choices = [null, null];
    this.level_points = 50;
  }

  displayGameMessage = async (className: string, message: string) => {
    gameMessage.innerHTML = message;
    await animateElement(messageContainer, className, "animationend");
    messageContainer.classList.remove(className);
  };

  doPlayerChoicesMatch = () =>
    (this.player_choices[0] && this.player_choices[0].metaData?.name) ===
    (this.player_choices[1] && this.player_choices[1].metaData?.name);

  handlePlayerChoice = async (card: Card) => {
    if (this.game_state === "choose-card") {
      if (card.facePosition === "down") {
        if (this.player_choices[0] === null) {
          this.setFirstChoice(card);
        } else if (this.player_choices[1] === null) {
          this.setSecondChoice(card);
        }
      }
    } else {
      console.log("sorry, you may not click right now");
    }
  };

  displayRightOrWrongChoice = () => {
    if (this.doPlayerChoicesMatch()) {
      this.displayGameMessage(CSS_CLASSES.SLIDE, "There was a match!");
      this.setPlayerPoints(this.level_points);
    } else {
      this.displayGameMessage(CSS_CLASSES.SLIDE, "Oops! No Match!");
    }
  };

  setFirstChoice = (card: Card) => {
    this.player_choices[0] = card.html;
    card.flipCardUp();
  };

  resetPlayerChoices = () => (this.player_choices = [null, null]);

  setSecondChoice = async (card: Card) => {
    this.player_choices[1] = card.html;
    this.displayRightOrWrongChoice();
    card.flipCardUp();
    this.game_state = "waiting";
    await wait(2000);
    this.resetPlayerChoices();
    this.game_state = "choose-card";
    flipAllCardsDown(allCards);
  };

  setPlayerPoints = async (points: number) => {
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
      if (whileLoopFailsafe >= 1000) return;
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
