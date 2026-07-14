import { allCards, gameMessage, messageContainer } from "./app.js";
import type Card from "./Card.js";
import { CSS_CLASSES } from "./constants.js";
import type { TGameHandler } from "./types.js";
import { animateElement, flipAllCardsDown, wait } from "./utility.js";

const GameHandler: TGameHandler = {
  game_state: "choose-card",
  player_choices: [null, null],

  displayGameMessage: async (className: string, message: string) => {
    gameMessage.innerHTML = message;
    await animateElement(messageContainer, className, "animationend");
    messageContainer.classList.remove(className);
  },

  doPlayerChoicesMatch: () =>
    (GameHandler.player_choices[0] &&
      GameHandler.player_choices[0].metaData?.name) ===
    (GameHandler.player_choices[1] &&
      GameHandler.player_choices[1].metaData?.name),

  handlePlayerChoice: async (card: Card) => {
    if (GameHandler.game_state === "choose-card") {
      if (card.facePosition === "down") {
        if (GameHandler.player_choices[0] === null) {
          GameHandler.setFirstChoice(card);
        } else if (GameHandler.player_choices[1] === null) {
          GameHandler.setSecondChoice(card);
        }
      }
    } else {
      console.log("sorry, you may not click right now");
    }
  },

  displayRightOrWrongChoice: () => {
    if (GameHandler.doPlayerChoicesMatch()) {
      GameHandler.displayGameMessage(CSS_CLASSES.SLIDE, "There was a match!");
    } else {
      GameHandler.displayGameMessage(CSS_CLASSES.SLIDE, "Oops! No Match!");
    }
  },

  setFirstChoice: (card: Card) => {
    GameHandler.player_choices[0] = card.html;
    card.flipCardUp();
  },

  resetPlayerChoices: () => (GameHandler.player_choices = [null, null]),

  setSecondChoice: async (card: Card) => {
    GameHandler.player_choices[1] = card.html;
    GameHandler.displayRightOrWrongChoice();
    card.flipCardUp();
    GameHandler.game_state = "waiting";
    await wait(2000);
    GameHandler.resetPlayerChoices();
    GameHandler.game_state = "choose-card";
    flipAllCardsDown(allCards);
  },
};

export default GameHandler;
