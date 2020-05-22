import {GameStatistics} from "../../model/GameStatistics";

export class User {
  constructor(
    public id : number = 0,
    public email : string = "",
    public fullname : string = "",
    public nickname : string = "",
    public statistics : GameStatistics = new GameStatistics()) {
  }

}
