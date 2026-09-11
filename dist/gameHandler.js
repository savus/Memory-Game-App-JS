import { allCards, cardData, gameMessage, gamePoints, incomingGamePoints, incomingPoints, messageContainer, points, pokemonData, setGamePoints, setIncomingGamePoints, setWhileLoopFailSafe, whileLoopFailsafe, } from "./app.js";
import CardFactory from "./CardFactory.js";
import { ACTIVE, SLIDE } from "./constants.js";
import { animateElement, flipAllCardsDown, setIncomingPointsText, wait, updatePlayerPoints, populateCardDataList, } from "./utility.js";
let gameState = "choose-card";
let playerChoices = [null, null];
let level_points = 50;
let choices_matched = false;
const initializeApp = (apiObject, pokemonNames, arrayToStore) => apiObject.fetchAllPokemon(pokemonNames, arrayToStore).finally(() => {
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
const doPlayerChoicesMatch = () => (playerChoices[0] && playerChoices[0].metaData?.name) ===
    (playerChoices[1] && playerChoices[1].metaData?.name);
const handlePlayerChoice = async (card) => {
    if (gameState === "choose-card") {
        if (card.facePosition === "down") {
            if (playerChoices[0] === null) {
                setFirstChoice(card);
            }
            else if (playerChoices[1] === null) {
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
    playerChoices[0] = card.html;
    card.flipCardUp();
};
const resetPlayerChoices = () => (playerChoices = [null, null]);
const setSecondChoice = async (card) => {
    playerChoices[1] = card.html;
    displayRightOrWrongChoice();
    card.flipCardUp();
    gameState = "waiting";
    await wait(2000);
    if (!choices_matched) {
        flipAllCardsDown(allCards);
    }
    resetPlayerChoices();
    gameState = "choose-card";
    choices_matched = false;
};
const setPlayerPoints = async (points) => {
    if (typeof points != "number" && typeof points != "string")
        return;
    if (typeof points == "string")
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
    gameState,
    playerChoices,
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