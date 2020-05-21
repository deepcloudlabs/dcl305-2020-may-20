import {Injectable} from '@angular/core';
import {GameStatistics} from "../model/GameStatistics";

@Injectable({
  providedIn: 'root'
})
export class StatisticService {
  _statistics: GameStatistics = new GameStatistics(0, 0, 0, 0, 0);

  constructor() {
    let stats = localStorage.getItem("statistics");
    if (stats == null) {
      let json = JSON.stringify(this._statistics);
      console.log(json);
      localStorage.setItem("statistics", json);
    } else {
      let o = JSON.parse(stats);
      this._statistics = new GameStatistics(o.wins, o.loses, o.total, o.averageWinTime, o.averageMove);
    }
  }

  get statistics(): GameStatistics {
    return this._statistics;
  }

  playerWins(tries: number, counter: number) {
    this._statistics.averageMove = (this._statistics.wins * this._statistics.averageMove) + tries;
    this._statistics.averageWinTime = (this._statistics.wins * this._statistics.averageWinTime) + 100 - counter;
    this._statistics.incrementWins();
    this._statistics.averageMove = this._statistics.averageMove / this._statistics.wins;
    this._statistics.averageWinTime = this._statistics.averageWinTime / this._statistics.wins;
    localStorage.setItem("statistics", JSON.stringify(this._statistics));
  }

  playerLoses() {
    this._statistics.incrementLoses();
    localStorage.setItem("statistics", JSON.stringify(this._statistics));
  }
}
