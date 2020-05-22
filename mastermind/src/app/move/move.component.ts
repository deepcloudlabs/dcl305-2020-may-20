import {Component, Input, OnInit} from '@angular/core';
import {Move} from "../../model/Move";

@Component({
  selector: 'move',
  templateUrl: './move.component.html',
  styleUrls: ['./move.component.css']
})
export class MoveComponent implements OnInit {

  @Input("value") // attribute
  move : Move ;

  constructor() { }

  ngOnInit(): void {
  }

}
