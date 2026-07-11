import { cardOnClickHandler } from "./clickEvents.js";
import { CSS_CLASSES } from "./constants.js";
class Card {
    html;
    cardData;
    facePosition;
    constructor(htmlData, cardData) {
        this.html = htmlData;
        this.cardData = cardData;
        this.facePosition = "down";
        this.html.addEventListener("click", () => {
            cardOnClickHandler(this);
        });
    }
    flipCardUp = () => {
        this.facePosition = "up";
        this.html.classList.remove(CSS_CLASSES.FACE_DOWN);
    };
    flipCardDown = () => {
        this.facePosition = "down";
        this.html.classList.add(CSS_CLASSES.FACE_DOWN);
    };
}
export default Card;
//# sourceMappingURL=Card.js.map