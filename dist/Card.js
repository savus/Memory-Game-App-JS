import { consultCardState } from "./app.js";
import { cardOnClickHandler } from "./clickEvents.js";
import { DOWN, FACEDOWN, UP } from "./constants.js";
class Card {
    html;
    cardData;
    state;
    constructor(htmlData, cardData) {
        this.html = htmlData;
        this.cardData = cardData;
        this.state = {
            isClickable: true,
            facePosition: "down",
            isFlippable: true,
        };
        this.html.addEventListener("click", () => {
            if (this.state.isClickable)
                return cardOnClickHandler(this);
            console.log("card is not clickable");
        });
    }
    flipCard = (direction = "toggle", ignoreState = false) => {
        if (!this.state.isFlippable && !ignoreState)
            return;
        const up = () => {
            this.state.facePosition = UP;
            this.html.dataset.facePosition = UP;
        };
        const down = () => {
            this.state.facePosition = DOWN;
            this.html.dataset.facePosition = DOWN;
        };
        const toggle = () => {
            if (this.state.facePosition === "up") {
                up();
            }
            else {
                down();
            }
        };
        switch (direction) {
            case "up":
                up();
                break;
            case "down":
                down();
                break;
            case "toggle":
                toggle();
                break;
        }
    };
    chooseCard = () => {
        this.flipCard("up");
        this.state.isClickable = false;
        this.state.isFlippable = false;
    };
    unChooseCard = () => {
        this.state.isClickable = true;
        this.state.isFlippable = true;
        this.flipCard("down");
    };
}
export default Card;
//# sourceMappingURL=Card.js.map