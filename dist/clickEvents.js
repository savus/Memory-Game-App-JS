export const cardOnClick = (card) => {
  if (card.metaData) {
    if (card.metaData.isFaceUp) {
      card.metaData.isFaceUp = false;
      card.style.backgroundColor = "white";
    } else {
      card.metaData.isFaceUp = true;
      card.style.backgroundColor = "red";
    }
  }
};
//# sourceMappingURL=clickEvents.js.map
