import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DispalyDetailsComponent } from './dispaly-details/dispaly-details.component';
import { DispalyDetailsDatetimeComponent } from './dispaly-details-datetime/dispaly-details-datetime.component';

@NgModule({
  declarations: [
    AppComponent,
    DispalyDetailsComponent,
    DispalyDetailsDatetimeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
