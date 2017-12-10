import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OccasionListComponent } from './occasion-list/occasion-list.component';

//pathMatch: 'full' is needed because there's a routing bug in this version of angular
//see: https://github.com/angular/angular/issues/20752

const routes: Routes = [
  { path: '', component: OccasionListComponent, pathMatch: 'full' },
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})

export class AppRoutingModule { }
