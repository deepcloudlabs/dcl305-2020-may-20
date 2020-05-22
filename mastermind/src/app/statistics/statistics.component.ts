import { Component, OnInit } from '@angular/core';
import {StatisticService} from "../statistic.service";
import {GameStatistics} from "../../model/GameStatistics";

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  constructor(private statisticsService : StatisticService) { }

  ngOnInit(): void {
  }

  get statistics() : GameStatistics {
    return this.statisticsService._statistics;
  }
}
