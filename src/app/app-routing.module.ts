import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MianComponent } from './mian/mian.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/timeline',
    pathMatch: 'full'
  },
  {
    path: 'timeline',
    component: MianComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
