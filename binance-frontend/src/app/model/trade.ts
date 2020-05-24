export class Trade {
  constructor(
    public symbol : string = "BTCUSDT",
    public price : string = "0.0",
    public quantity : string = "0.0",
    public timestamp : number = 1,
    public datetime : string = "",
  ) {
  }
}
