import {Component, OnInit, ViewChild} from '@angular/core';
import {Game} from "../model/GameModel";
import {Move} from "../model/Move";
import {GameStatistics} from "../model/GameStatistics";
import {StatisticService} from "./statistic.service";
import {MastermindService} from "./mastermind.service";
import {AbstractControl, NgForm, NgModel} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mastermind';

  // Dependency Injection
  constructor(private statService: StatisticService,
              private mastermindService: MastermindService) {
  }

  get statistics(): GameStatistics {
    return this.statService.statistics;
  }

  get game(): Game {
    return this.mastermindService.game;
  }

  play(guess : NgModel) {
    guess.control.updateValueAndValidity();
    if (guess.valid)
        this.mastermindService.play();
  }
}
