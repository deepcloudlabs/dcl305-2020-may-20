export class Move {
  constructor(
    public guess : number ,
    public message : string,
    public perfectMatch : number,
    public partialMatch : number) {
  }
}
