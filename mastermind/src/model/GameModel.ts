import {Move} from "./Move";

export class Game {
  tries: number = 0;
  guess: number = 123;
  gameLevel: number = 3;
  moves: Array<Move>;
  counter: number = 100;

  constructor() {
    console.log("Game mode is created!" + JSON.stringify(this));
    this.moves = Array.from([]);
  }

  get history(): Array<number> {
    return this.moves.map(move => Number(move.guess));
  }

  reset() {
    this.tries = 0;
    this.moves = [];
    this.counter = 100;
  }
}
