import {Injectable} from '@angular/core';
import {Game} from "../model/GameModel";
import {Move} from "../model/Move";
import {StatisticService} from "./statistic.service";

@Injectable({
  providedIn: 'root'
})
export class MastermindService {
  _game: Game = new Game();
  private secret: number;

  constructor(private statService: StatisticService) {
    let mastermind = localStorage.getItem("mastermind");
    if (mastermind == null) {
      localStorage.setItem("mastermind", JSON.stringify({gameLevel: this._game.gameLevel}));
    } else {
      this._game.gameLevel = JSON.parse(mastermind).gameLevel;
    }
    setInterval(() => this.countDown(), 1000);
  }

  countDown() {
    this._game.counter--;
    if (this._game.counter <= 0) {
      this.statService.playerLoses();
      this.initGame();
    }
  }

  get game(): Game {
    return this._game;
  }

  initGame() {
    this.secret = this.createSecret(this._game.gameLevel);
    console.log(this.secret);
    this._game.reset();
    localStorage.setItem("mastermind", JSON.stringify({gameLevel: this._game.gameLevel}));
  }

  public play() {
    this._game.tries++;
    if (this._game.guess == this.secret) {
      this._game.gameLevel++;
      this.statService.playerWins(this._game.tries, this._game.counter);
      this.initGame();
    } else {
      if (this._game.tries > 10) {
        this.statService.playerLoses();
        this.initGame();
      } else {
        this._game.moves.push(this.createMove(this._game.guess, this.secret));
      }
    }
  }

  private createSecret(level: number): number {
    const digits: Array<number> = [];
    digits.push(this.createDigit(1, 9));
    while (digits.length < level) {
      let digit: number;
      do {
        digit = this.createDigit(0, 9)
      } while (digits.includes(digit));
      digits.push(digit);
    }
    let value: number = 0;
    for (let i = 0; i < digits.length; ++i)
      value = 10 * value + digits[i];
    return value;
  }

  private createDigit(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  private createMove(guess: number, secret: number): Move {
    const strSecret: string = secret.toString();
    const strGuess: string = guess.toString();
    let perfectMatch: number = 0; // +
    let partialMatch: number = 0; // -
    for (let i = 0; i < strSecret.length; ++i) {
      for (let j = 0; j < strGuess.length; ++j) {
        if (strSecret.charAt(i) === strGuess.charAt(j)) {
          if (i === j)
            perfectMatch++;
          else
            partialMatch++;
        }
      }
    }
    let message: string = "";
    if (partialMatch == 0 && perfectMatch == 0) {
      message = "No match!";
    } else {
      if (partialMatch > 0) message += "-" + partialMatch;
      if (perfectMatch > 0) message += "+" + perfectMatch;
    }
    return new Move(guess, message, perfectMatch, partialMatch);
  }
}
