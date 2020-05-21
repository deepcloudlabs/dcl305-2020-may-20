export class GameStatistics {
  constructor(public wins : number,public loses : number,public total : number) {
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
