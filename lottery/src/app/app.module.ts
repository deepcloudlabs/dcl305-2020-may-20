import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LotteryBodyComponent } from './lottery-body/lottery-body.component';
import { LotteryTableComponent } from './lottery-table/lottery-table.component';
import { LotteryHeaderComponent } from './lottery-header/lottery-header.component';

@NgModule({
  declarations: [
    AppComponent,
    LotteryBodyComponent,
    LotteryTableComponent,
    LotteryHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
