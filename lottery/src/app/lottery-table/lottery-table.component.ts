import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-lottery-table',
  templateUrl: './lottery-table.component.html',
  styleUrls: ['./lottery-table.component.css']
})
export class LotteryTableComponent implements OnInit {
  @Input("array")
  numbers : Array<Array<number>> ;
  @Input("ranges")
  index : Array<number> ;

  constructor() { }

  ngOnInit(): void {
  }

}
