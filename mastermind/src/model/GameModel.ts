import {Move} from "./Move";

export class Game {
  tries : number = 0 ;
  guess : number = 123 ;
  gameLevel : number = 3;
  moves : Array<Move> ;
  counter : number = 10;

  constructor() {
    this.moves = Array.from([]);
  }

  reset() {
    this.tries = 0;
    this.moves = [];
    this.counter = 100;
  }
}
