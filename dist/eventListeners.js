import { CSS_CLASSES } from "./constants.js";
import GameHandler from "./GameHandler.js";
import { wait } from "./utility.js";
export const cardOnClick = async (card) => {
  if (card.metaData) {
    // switch (GameHandler.game_state) {
    //   case "choose-card":
    //     if (GameHandler.player_choices[0] === null) {
    //       GameHandler.player_choices[0] = card;
    //       card.classList.remove(CSS_CLASSES.FACE_DOWN);
    //     } else {
    //       if (GameHandler.player_choices[1] === null) {
    //         GameHandler.player_choices[1] = card;
    //         card.classList.remove(CSS_CLASSES.FACE_DOWN);
    //         if (
    //           GameHandler.player_choices[0] === GameHandler.player_choices[1]
    //         ) {
    //           console.log("Match found!");
    //         } else {
    //           console.log("No match");
    //           GameHandler.player_choices = [null, null];
    //         }
    //       }
    //     }
    //     break;
    // }
  }
};
//# sourceMappingURL=eventListeners.js.map
