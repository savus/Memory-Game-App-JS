import { allCards } from "./app.js";
import { CSS_CLASSES } from "./constants.js";
import Game_Handler from "./game_handler.js";
import type { TPokemon, TPokemon_Dom } from "./types.js";
import { flipAllCardsDown, wait } from "./utility.js";

class Card {
  html: TPokemon_Dom;
  cardData: TPokemon;
  facePosition: "up" | "down";

  constructor(htmlData: TPokemon_Dom, cardData: TPokemon) {
    this.html = htmlData;
    this.cardData = cardData;
    this.facePosition = "down";

    this.html.addEventListener("click", async () => {
      if (Game_Handler.game_state === "choose-card") {
        if (this.facePosition === "down") {
          if (Game_Handler.player_choices[0] === null) {
            Game_Handler.player_choices[0] = this.html;
            this.flipCardUp();
          } else if (Game_Handler.player_choices[1] === null) {
            Game_Handler.player_choices[1] = this.html;
            if (
              Game_Handler.player_choices[0].metaData?.name ===
              Game_Handler.player_choices[1].metaData?.name
            )
              console.log("Match!");
            else {
              console.log("Not a match!");
            }
            this.flipCardUp();
            Game_Handler.player_choices = [null, null];
            Game_Handler.game_state = "waiting";
            await wait(2000);
            Game_Handler.game_state = "choose-card";
            flipAllCardsDown(allCards);
          }
        }
      } else {
        console.log("sorry, you may not click right now");
      }
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
