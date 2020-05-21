import {Injectable} from '@angular/core';
import {GameStatistics} from "../model/GameStatistics";

@Injectable({
  providedIn: 'root'
})
export class StatisticService {
  _statistics: GameStatistics = new GameStatistics(0, 0, 0);

  constructor() {
    let stats = localStorage.getItem("statistics");
    if (stats == null) {
      localStorage.setItem("statistics", JSON.stringify(this._statistics));
    } else {
      this._statistics = JSON.parse(stats);
    }
  }

  get statistics(): GameStatistics {
    return this._statistics;
  }

  playerWins() {
    this._statistics.incrementWins();
    localStorage.setItem("statistics", JSON.stringify(this._statistics));
  }

  playerLoses() {
    this._statistics.incrementLoses();
    localStorage.setItem("statistics", JSON.stringify(this._statistics));
  }
}
