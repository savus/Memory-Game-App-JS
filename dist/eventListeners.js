import { CSS_CLASSES } from "./constants.js";
export const cardOnClick = (card) => {
    if (card.metaData) {
        if (card.metaData.isFaceUp) {
            card.metaData.isFaceUp = false;
            card.classList.add(CSS_CLASSES.FACE_DOWN);
        }
        else {
            card.metaData.isFaceUp = true;
            card.classList.remove(CSS_CLASSES.FACE_DOWN);
        }
    }
};
//# sourceMappingURL=eventListeners.js.map