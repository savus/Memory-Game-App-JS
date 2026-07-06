import { CSS_CLASSES } from "./constants.js";
import Game_Handler from "./game_handler.js";
import { wait } from "./utility.js";
export const cardOnClick = async (card) => {
    if (card.metaData) {
        switch (Game_Handler.game_state) {
            case "choose-card":
                if (Game_Handler.player_choices[0] === null) {
                    Game_Handler.player_choices[0] = card;
                    card.classList.remove(CSS_CLASSES.FACE_DOWN);
                }
                else {
                    if (Game_Handler.player_choices[1] === null) {
                        Game_Handler.player_choices[1] = card;
                        card.classList.remove(CSS_CLASSES.FACE_DOWN);
                        console.log(Game_Handler.player_choices[0] === Game_Handler.player_choices[1]);
                    }
                }
                break;
        }
    }
};
//# sourceMappingURL=eventListeners.js.map