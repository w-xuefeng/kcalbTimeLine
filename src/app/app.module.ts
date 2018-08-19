import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MianComponent } from './mian/mian.component';
import { TimelineModule } from './timeline/timeline.module';

@NgModule({
  declarations: [
    AppComponent,
    MianComponent
  ],
  imports: [
    BrowserModule,
    TimelineModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
