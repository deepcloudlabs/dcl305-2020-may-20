import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from "@angular/forms";
import { MoveComponent } from './move/move.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { MinusPipe } from './minus.pipe';
import { PlusPipe } from './pipes/plus.pipe';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { UserComponent } from './user/user.component';
import { RangeDirective } from './range.directive';
import { DigitDirective } from './digit.directive';

@NgModule({
  declarations: [
    AppComponent,
    MoveComponent,
    ProgressbarComponent,
    MinusPipe,
    PlusPipe,
    LandingpageComponent,
    StatisticsComponent,
    UserComponent,
    RangeDirective,
    DigitDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [LandingpageComponent]
})
export class AppModule { }
