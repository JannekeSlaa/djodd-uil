import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home.component';
import { ChartPrognoseComponent } from './chart-prognose/chart-prognose.component';
import { LeerlingenAantalService } from './leerling-prognose.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChartPrognoseComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [LeerlingenAantalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
