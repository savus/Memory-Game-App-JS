import {
  allCards,
  gameMessage,
  gamePoints,
  incomingGamePoints,
  incomingPoints,
  messageContainer,
  points,
  setGamePoints,
  setIncomingGamePoints,
  setWhileLoopFailSafe,
  whileLoopFailsafe,
} from "./app.js";
import type Card from "./Card.js";
import { ACTIVE, SLIDE } from "./constants.js";
import type { TGameHandler } from "./types.js";
import {
  animateElement,
  flipAllCardsDown,
  setIncomingPointsText,
  writePlayerPoints,
  wait,
} from "./utility.js";

export const GameHandler: TGameHandler = {
  game_state: "choose-card",
  player_choices: [null, null],
  level_points: 50,
  choices_matched: false,

  initializeApp: (apiObject, names) =>
    apiObject.fetchAllPokemon(names).finally(() => {
      GameHandler.startMemoryGame();
    }),

  startMemoryGame: async () => {
    // writePlayerPoints(`${points} ${gamePoints}`);
    // generateCardData(pokemonData);
    // createAndAppendAllCards(cardData);
    console.log("start game");
  },

  displayGameMessage: async (className, message) => {
    gameMessage.innerHTML = message;
    await animateElement(messageContainer, className, "animationend");
    messageContainer.classList.remove(className);
  },

  doPlayerChoicesMatch: () =>
    (GameHandler.player_choices[0] &&
      GameHandler.player_choices[0].metaData?.name) ===
    (GameHandler.player_choices[1] &&
      GameHandler.player_choices[1].metaData?.name),

  handlePlayerChoice: async (card) => {
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
      GameHandler.displayGameMessage(SLIDE, "There was a match!");
      GameHandler.setPlayerPoints(`${GameHandler.level_points}`);
      GameHandler.choices_matched = true;
    } else {
      GameHandler.displayGameMessage(SLIDE, "Oops! No Match!");
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
    if (!GameHandler.choices_matched) {
      flipAllCardsDown(allCards);
    }
    GameHandler.resetPlayerChoices();
    GameHandler.game_state = "choose-card";
    GameHandler.choices_matched = false;
  },

  setPlayerPoints: async (points) => {
    setIncomingGamePoints(parseInt(points));
    setIncomingPointsText(incomingGamePoints, "-");
    writePlayerPoints(`${points} ${gamePoints}`);
    await animateElement(incomingPoints, ACTIVE, "transitionend");
    await GameHandler.transferPointsAnimation();
    incomingPoints.classList.remove("active");
    setWhileLoopFailSafe(0);
  },

  transferPointsAnimation: async () => {
    while (incomingGamePoints > 0) {
      setWhileLoopFailSafe(whileLoopFailsafe + 1);
      if (whileLoopFailsafe >= 1000) return;
      setIncomingGamePoints(incomingGamePoints - 1);
      setGamePoints(gamePoints - 1);
      setIncomingPointsText(incomingGamePoints, "-");
      writePlayerPoints(`${points} ${gamePoints}`);
      await wait(10);
    }
    return;
  },
};

export default GameHandler;
