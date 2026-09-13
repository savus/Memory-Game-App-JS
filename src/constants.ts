import type { TGamePhase, TGameState } from "./types.js";

export const pokeNames = [
  "pikachu",
  "ditto",
  "charmander",
  "bulbasaur",
  "abra",
  "goldeen",
  "articuno",
  "diglett",
];

export const ACTIVE = "active";
export const FACEDOWN = "face-down";
export const SLIDE = "slide";
export const DOWN = "down";
export const UP = "up";
export const DATA_FACE_POSIION = "data-face-position";
export const CLASS = "class";
export const GAMESTATES = ["choose-card", "something", "waiting"];
export const CARDSTATES = ["face-up", "face-down"];
