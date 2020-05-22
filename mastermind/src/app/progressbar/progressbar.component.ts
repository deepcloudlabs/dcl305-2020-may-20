import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.css']
})
export class ProgressbarComponent implements OnInit {
  @Input("value")
  value : number;

  @Input("max")
  max : number;

  constructor() { }

  ngOnInit(): void {
  }

  get valuePercent() : string {
    return Math.round(100 * (this.value / this.max)) + "%";
  }

  get valueRaw() : number {
    return Math.round(100 * (this.value / this.max));
  }

  get progressBarClass() : string {
    if (this.valueRaw<20)
      return "progress-bar bg-danger";
    if (this.valueRaw<50)
      return "progress-bar bg-warning";
    return "progress-bar bg-success";
  }

}
