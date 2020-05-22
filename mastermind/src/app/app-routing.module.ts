import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from "./app.component";
import {StatisticsComponent} from "./statistics/statistics.component";
import {UserComponent} from "./user/user.component";


const routes: Routes = [
  { path : 'gameconsole', component : AppComponent},
  { path : 'statistics', component : StatisticsComponent},
  { path : 'users', component : UserComponent},
  { path : 'users/:id', component : UserComponent},
  { path : '', redirectTo: 'gameconsole', pathMatch : "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
