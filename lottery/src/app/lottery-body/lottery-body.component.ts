import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-lottery-body',
  templateUrl: './lottery-body.component.html',
  styleUrls: ['./lottery-body.component.css']
})
export class LotteryBodyComponent implements OnInit {
  @Input("array")
  numbers : Array<Array<number>> ;
  constructor() { }

  ngOnInit(): void {
  }

}
