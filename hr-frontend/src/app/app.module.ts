import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { TckimliknoDirective } from './tckimlikno.directive';
import { IbanDirective } from './iban.directive';
import {NumberDirective} from "./number.directive";

@NgModule({
  declarations: [
    AppComponent,
    TckimliknoDirective,
    IbanDirective,
    NumberDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
