import { allCards, card_container, cardData, gameMessage, gamePoints, incomingGamePoints, incomingPoints, messageContainer, points, pokemonData, setGamePoints, setIncomingGamePoints, setWhileLoopFailSafe, whileLoopFailsafe, } from "./app.js";
import CardFactory from "./CardFactory.js";
import { ACTIVE, SLIDE } from "./constants.js";
import { animateElement, flipAllCardsDown, setIncomingPointsText, wait, updatePlayerPoints, populateCardDataList, } from "./utility.js";
let game_state = "choose-card";
let player_choices = [null, null];
let level_points = 50;
let choices_matched = false;
const initializeApp = (apiObject, names, arrayToStore) => apiObject.fetchAllPokemon(names, arrayToStore).finally(() => {
    startMemoryGame();
});
const startMemoryGame = async () => {
    updatePlayerPoints(`${points} ${gamePoints}`);
    populateCardDataList(pokemonData, cardData);
    CardFactory.createAndAppendAllCards(cardData);
};
const displayGameMessage = async (className, message) => {
    gameMessage.innerHTML = message;
    await animateElement(messageContainer, className, "animationend");
    messageContainer.classList.remove(className);
};
const doPlayerChoicesMatch = () => (player_choices[0] && player_choices[0].metaData?.name) ===
    (player_choices[1] && player_choices[1].metaData?.name);
const handlePlayerChoice = async (card) => {
    if (game_state === "choose-card") {
        if (card.facePosition === "down") {
            if (player_choices[0] === null) {
                setFirstChoice(card);
            }
            else if (player_choices[1] === null) {
                setSecondChoice(card);
            }
        }
    }
    else {
        console.log("sorry, you may not click right now");
    }
};
const displayRightOrWrongChoice = () => {
    if (doPlayerChoicesMatch()) {
        displayGameMessage(SLIDE, "There was a match!");
        setPlayerPoints(`${level_points}`);
        choices_matched = true;
    }
    else {
        displayGameMessage(SLIDE, "Oops! No Match!");
    }
};
const setFirstChoice = (card) => {
    player_choices[0] = card.html;
    card.flipCardUp();
};
const resetPlayerChoices = () => (player_choices = [null, null]);
const setSecondChoice = async (card) => {
    player_choices[1] = card.html;
    displayRightOrWrongChoice();
    card.flipCardUp();
    game_state = "waiting";
    await wait(2000);
    if (!choices_matched) {
        flipAllCardsDown(allCards);
    }
    resetPlayerChoices();
    game_state = "choose-card";
    choices_matched = false;
};
const setPlayerPoints = async (points) => {
    setIncomingGamePoints(parseInt(points));
    setIncomingPointsText(incomingGamePoints, "-");
    updatePlayerPoints(`${points} ${gamePoints}`);
    await animateElement(incomingPoints, ACTIVE, "transitionend");
    await transferPointsAnimation();
    incomingPoints.classList.remove("active");
    setWhileLoopFailSafe(0);
};
const transferPointsAnimation = async () => {
    while (incomingGamePoints > 0) {
        setWhileLoopFailSafe(whileLoopFailsafe + 1);
        if (whileLoopFailsafe >= 1000)
            return;
        setIncomingGamePoints(incomingGamePoints - 1);
        setGamePoints(gamePoints - 1);
        setIncomingPointsText(incomingGamePoints, "-");
        updatePlayerPoints(`${points} ${gamePoints}`);
        await wait(10);
    }
    return;
};
export const GameHandler = {
    game_state,
    player_choices,
    level_points,
    choices_matched,
    initializeApp,
    startMemoryGame,
    displayGameMessage,
    doPlayerChoicesMatch,
    handlePlayerChoice,
    displayRightOrWrongChoice,
    setFirstChoice,
    setSecondChoice,
    setPlayerPoints,
    transferPointsAnimation,
    resetPlayerChoices,
};
export default GameHandler;
//# sourceMappingURL=gameHandler.js.map