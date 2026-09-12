import { allCards, cardData, gameMessage, gamePoints, incomingGamePoints, incomingPoints, messageContainer, points, pokemonData, setGamePoints, setIncomingGamePoints, setWhileLoopFailSafe, whileLoopFailsafe, } from "./app.js";
import CardFactory from "./CardFactory.js";
import { ACTIVE, SLIDE } from "./constants.js";
import { animateElement, flipAllCardsDown, setIncomingPointsText, wait, updatePlayerPoints, populateCardDataList, } from "./utility.js";
const state = {
    phase: "choose-card",
};
let levelPoints = 50;
let choicesMatched = false;
const playerChoices = {
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
const doPlayerChoicesMatch = () => {
    return ((playerChoices.firstChoice &&
        playerChoices.firstChoice.html.metaData?.name) ===
        (playerChoices.secondChoice &&
            playerChoices.secondChoice.html.metaData?.name));
};
const handlePlayerChoice = async (card) => {
    const canChooseCard = state.phase === "choose-card";
    if (!canChooseCard) {
        console.log("You may not click at this time");
        return;
    }
    if (playerChoices.firstChoice === null) {
        setFirstChoice(card);
    }
    else if (playerChoices.secondChoice === null) {
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
    playerChoices.firstChoice = card;
    card.chooseCard();
};
const resetPlayerChoices = () => {
    if (!choicesMatched) {
        playerChoices.firstChoice?.unChooseCard();
        playerChoices.secondChoice?.unChooseCard();
    }
    playerChoices.firstChoice = null;
    playerChoices.secondChoice = null;
};
const setSecondChoice = async (card) => {
    playerChoices.secondChoice = card;
    displayRightOrWrongChoice();
    card.chooseCard();
    state.phase = "waiting";
    await wait(2000);
    if (!choicesMatched)
        flipAllCardsDown(allCards);
    resetPlayerChoices();
    state.phase = "choose-card";
    choicesMatched = false;
};
const setPlayerPoints = async (points) => {
    if (typeof points != "number" && typeof points != "string")
        return;
    if (typeof points == "string")
        points = parseInt(points);
    setIncomingGamePoints(points);
    setIncomingPointsText(incomingGamePoints, "-");
    updatePlayerPoints(`Points: ${gamePoints}`);
    await animateElement(incomingPoints, ACTIVE, "transitionend");
    await animateTransferringPoints();
    incomingPoints.classList.remove("active");
    setWhileLoopFailSafe(0);
};
const animateTransferringPoints = async () => {
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
    state,
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
    animateTransferringPoints,
    resetPlayerChoices,
};
export default GameHandler;
//# sourceMappingURL=gameHandler.js.map