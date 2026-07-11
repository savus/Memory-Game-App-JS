import { allCards } from "./app.js";
import GameHandler from "./gameHandler.js";
import { flipAllCardsDown, wait } from "./utility.js";
export const cardOnClickHandler = async (self) => {
    if (GameHandler.game_state === "choose-card") {
        if (self.facePosition === "down") {
            if (GameHandler.player_choices[0] === null) {
                GameHandler.player_choices[0] = self.html;
                self.flipCardUp();
            }
            else if (GameHandler.player_choices[1] === null) {
                GameHandler.player_choices[1] = self.html;
                if (GameHandler.player_choices[0].metaData?.name ===
                    GameHandler.player_choices[1].metaData?.name)
                    console.log("Match!");
                else {
                    console.log("Not a match!");
                }
                self.flipCardUp();
                GameHandler.player_choices = [null, null];
                GameHandler.game_state = "waiting";
                await wait(2000);
                GameHandler.game_state = "choose-card";
                flipAllCardsDown(allCards);
            }
        }
    }
    else {
        console.log("sorry, you may not click right now");
    }
};
//# sourceMappingURL=clickEvents.js.map