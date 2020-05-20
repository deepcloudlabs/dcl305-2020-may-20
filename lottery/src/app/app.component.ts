import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './lottery.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  column: number = 3;
  numbers: Array<Array<number>> = Array.from([]);

  constructor() {
    console.log("AppComponent is created.");
  }

  draw() {
    for (let i : number = 0; i < this.column; ++i)
      this.numbers.push(this.createNumbers());
  }

  reset() {
    this.numbers = Array.from([]);
  }

  private createNumbers(): Array<number> {
    let nums = Array.from([]);
    while (nums.length < 6) {
      nums.push(this.createDigit(1, 49));
    }
    nums.sort((x, y) => x - y);
    return nums;
  }

  private createDigit(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
