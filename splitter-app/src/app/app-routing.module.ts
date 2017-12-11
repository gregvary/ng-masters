import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OccasionDetailComponent } from './occasion-detail/occasion-detail.component';
import { OccasionListComponent } from './occasion-list/occasion-list.component';

//pathMatch: 'full' is needed because there's a routing bug in this version of angular
//see: https://github.com/angular/angular/issues/20752

const routes: Routes = [
  { path: '', component: OccasionListComponent, pathMatch: 'full' },

  { path: 'detail/:id', component: OccasionDetailComponent, pathMatch: 'full' }
  // { path: 'detail', component: OccasionDetailComponent }
];


@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})

export class AppRoutingModule { }
