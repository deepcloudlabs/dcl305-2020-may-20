export class GameStatistics {
  constructor(public wins: number = 0,
              public loses: number = 0,
              public total: number = 0,
              public averageWinTime : number = 0,
              public averageMove : number = 0) {
  }

  incrementWins() {
    this.wins++;
    this.total++;
  }

  incrementLoses() {
    this.loses++;
    this.total++;
  }
}
