import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  //template: '<h1>Hello Mars!</h1>',
  templateUrl: './lottery.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private readonly SIZE : number = 8;
  column: number = 3;
  numbers: Array<Array<number>> = Array.from([]);
  index: Array<number> = Array.from([1,2,3,4,5,6,7,8]);

  constructor() {
    console.log("AppComponent is created.");

    window.setInterval(()=>{
      this.column++;
    },1000);


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
    while (nums.length < this.SIZE) {
      nums.push(this.createDigit(1, 49));
    }
    nums.sort((x, y) => x - y);
    return nums;
  }

  private createDigit(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
