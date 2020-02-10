import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VerzuimPerStatusComponent } from './verzuim-per-status/verzuim-per-status.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BarchartComponent } from './barchart/barchart.component';
import { GroepsgroottePerLeerjaarComponent } from './groepsgrootte-per-leerjaar/groepsgrootte-per-leerjaar.component';
import { VerzuimPerStatusNieuwComponent } from './verzuim-per-status-nieuw/verzuim-per-status-nieuw.component';

@NgModule({
  declarations: [
    AppComponent,
    VerzuimPerStatusComponent,
    DashboardComponent,
    BarchartComponent,
    GroepsgroottePerLeerjaarComponent,
    VerzuimPerStatusNieuwComponent],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
