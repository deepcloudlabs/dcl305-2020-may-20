export class GameStatistics {
  constructor(public wins: number,
              public loses: number,
              public total: number,
              public averageWinTime : number,
              public averageMove : number) {
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
