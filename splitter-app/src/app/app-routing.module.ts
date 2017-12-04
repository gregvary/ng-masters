import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OccDetail } from './occasion-detail/occasion-detail.component.ts';

const routes: Routes = [
  { path: 'detail/:id', component: OccDetail }
];


@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})

export class AppRoutingModule { }
