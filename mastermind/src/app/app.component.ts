import {Component, OnInit} from '@angular/core';
import {Game} from "../model/GameModel";
import {GameStatistics} from "../model/GameStatistics";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'mastermind';
  game: Game = new Game();
  statistics: GameStatistics = new GameStatistics(0, 0, 0);
  private secret: number;

  constructor() {
  }

  ngOnInit(): void {
    this.secret = this.createSecret(this.game.gameLevel);
  }

  public play() {
    this.game.tries++;
    if (this.game.guess == this.secret) {
      this.game.gameLevel++;
      this.statistics.incrementWins();
      this.secret = this.createSecret(this.game.gameLevel);
      this.game.reset();
    } else {
      if (this.game.tries > 10) {
        this.statistics.incrementLoses();
        this.secret = this.createSecret(this.game.gameLevel);
        this.game.reset();
      } else {
        let message: string = this.createMessage(this.game.guess, this.secret);
        this.game.moves.push(new Move(this.game.guess, message));
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

  private createMessage(guess: number, secret: number): string {
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
    if (perfectMatch == 0 && partialMatch == 0) return "No match!";
    let message: string = "";
    if (partialMatch > 0) message += "-" + partialMatch;
    if (perfectMatch > 0) message += "+" + perfectMatch;
    return message;
  }
}
