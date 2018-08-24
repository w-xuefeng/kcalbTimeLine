import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MianComponent } from './mian/mian.component';
import { TimelineModule } from './timeline/timeline.module';
import { HttpClientModule } from '@angular/common/http';
import { BacktopComponent } from './backtop/backtop.component';

@NgModule({
  declarations: [
    AppComponent,
    MianComponent,
    BacktopComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TimelineModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
