import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeLineComponent } from './time-line/time-line.component';
import { TimeLineRoutingModule } from './timeline-routing.module';

@NgModule({
  imports: [
    CommonModule,
    TimeLineRoutingModule
  ],
  declarations: [TimeLineComponent],
  exports: [TimeLineComponent]
})
export class TimelineModule { }
