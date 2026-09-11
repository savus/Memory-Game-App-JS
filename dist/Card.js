import { cardOnClickHandler } from "./clickEvents.js";
import { FACEDOWN } from "./constants.js";
class Card {
    html;
    cardData;
    state;
    constructor(htmlData, cardData) {
        this.html = htmlData;
        this.cardData = cardData;
        this.state = {
            isClickable: false,
            facePosition: "down",
        };
        this.html.addEventListener("click", () => {
            cardOnClickHandler(this);
        });
    }
    flipCardUp = () => {
        this.state.facePosition = "up";
        this.html.classList.remove(FACEDOWN);
    };
    flipCardDown = () => {
        this.state.facePosition = "down";
        this.html.classList.add(FACEDOWN);
    };
}
export default Card;
//# sourceMappingURL=Card.js.map