import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-lottery-header',
  templateUrl: './lottery-header.component.html',
  styleUrls: ['./lottery-header.component.css']
})
export class LotteryHeaderComponent implements OnInit {
  @Input("ranges")
  index : Array<number> ;
  constructor() { }

  ngOnInit(): void {
  }

}
