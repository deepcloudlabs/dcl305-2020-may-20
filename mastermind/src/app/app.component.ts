import {Component, OnInit, ViewChild} from '@angular/core';
import {Game} from "../model/GameModel";
import {Move} from "../model/Move";
import {GameStatistics} from "../model/GameStatistics";
import {StatisticService} from "./statistic.service";
import {MastermindService} from "./mastermind.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Mastermind';

  // Dependency Injection
  constructor(private statService: StatisticService,
              private mastermindService: MastermindService) {
  }

  get statistics(): GameStatistics {
    return this.statService.statistics;
  }

  ngOnInit(): void {
  }

  get game(): Game {
    return this.mastermindService.game;
  }

  play() {
    this.mastermindService.play();
  }
}
