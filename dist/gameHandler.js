import { allCards, cardData, gameMessage, gamePoints, incomingGamePoints, incomingPoints, messageContainer, points, pokemonData, setGamePoints, setIncomingGamePoints, setWhileLoopFailSafe, whileLoopFailsafe, } from "./app.js";
import CardFactory from "./CardFactory.js";
import { ACTIVE, SLIDE } from "./constants.js";
import { animateElement, flipAllCardsDown, setIncomingPointsText, wait, updatePlayerPoints, populateCardDataList, } from "./utility.js";
let gameState = "choose-card";
let playerChoices = [null, null];
let levelPoints = 50;
let choicesMatched = false;
const playerChoicesUpdate = {
    firstChoice: null,
    secondChoice: null,
};
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
const doPlayerChoicesMatch = () => (playerChoicesUpdate.firstChoice &&
    playerChoicesUpdate.firstChoice.metaData?.name) ===
    (playerChoicesUpdate.secondChoice &&
        playerChoicesUpdate.secondChoice.metaData?.name);
const handlePlayerChoice = async (card) => {
    if (gameState != "choose-card" || card.facePosition != "down") {
        console.log("You may not click at this time");
        return;
    }
    if (playerChoicesUpdate.firstChoice === null) {
        setFirstChoice(card);
    }
    else if (playerChoicesUpdate.secondChoice === null) {
        setSecondChoice(card);
    }
};
const displayRightOrWrongChoice = () => {
    if (!doPlayerChoicesMatch()) {
        displayGameMessage(SLIDE, "Oops! No match!");
        return;
    }
    displayGameMessage(SLIDE, "There was a match!");
    setPlayerPoints(levelPoints);
    choicesMatched = true;
};
const setFirstChoice = (card) => {
    playerChoicesUpdate.firstChoice = card.html;
    card.flipCardUp();
};
const resetPlayerChoices = () => (playerChoices = [null, null]);
const resetPlayerChoicesUpdate = () => {
    playerChoicesUpdate.firstChoice = null;
    playerChoicesUpdate.secondChoice = null;
};
const setSecondChoice = async (card) => {
    playerChoicesUpdate.secondChoice = card.html;
    displayRightOrWrongChoice();
    card.flipCardUp();
    gameState = "waiting";
    await wait(2000);
    if (!choicesMatched)
        flipAllCardsDown(allCards);
    resetPlayerChoicesUpdate();
    gameState = "choose-card";
    choicesMatched = false;
};
const setPlayerPoints = async (points) => {
    if (typeof points != "number" && typeof points != "string")
        return;
    if (typeof points == "string")
        points = parseInt(points);
    setIncomingGamePoints(points);
    setIncomingPointsText(incomingGamePoints, "-");
    updatePlayerPoints(`${points} ${gamePoints}`);
    await animateElement(incomingPoints, ACTIVE, "transitionend");
    await animateTransferingPoints();
    incomingPoints.classList.remove("active");
    setWhileLoopFailSafe(0);
};
const animateTransferingPoints = async () => {
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
    levelPoints,
    choicesMatched,
    initializeApp,
    startMemoryGame,
    displayGameMessage,
    doPlayerChoicesMatch,
    handlePlayerChoice,
    displayRightOrWrongChoice,
    setFirstChoice,
    setSecondChoice,
    setPlayerPoints,
    animateTransferingPoints,
    resetPlayerChoices,
};
export default GameHandler;
//# sourceMappingURL=gameHandler.js.map