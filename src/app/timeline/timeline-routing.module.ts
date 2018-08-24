import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimeLineComponent } from './time-line/time-line.component';

const routes: Routes = [
  { path: 'timeline_component', component: TimeLineComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class TimeLineRoutingModule { }
