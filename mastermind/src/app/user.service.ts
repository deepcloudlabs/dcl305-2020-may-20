import {Injectable} from '@angular/core';
import {User} from "./model/user";
import {GameStatistics} from "../model/GameStatistics";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: Map<number, User> = new Map();

  constructor() {
    let statics1 = new GameStatistics(100, 0, 100, 4, 8);
    let statics2 = new GameStatistics(140, 10, 150, 7, 7);
    let jack = new User(1, "jack@example.com", "Jack Bauer", "jack", statics1);
    let kate = new User(2, "kate@example.com", "Kate Austen", "katea", statics2);
    this.users.set(1, jack);
    this.users.set(2, kate);
  }

  findUserById(id: number): User {
    return this.users.get(id);
  }

  findAllUsers(): Array<User> {
    return Array.from(this.users.values());
  }
}
