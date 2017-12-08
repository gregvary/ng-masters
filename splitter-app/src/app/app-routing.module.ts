import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OccasionDetailComponent } from './occasion-detail/occasion-detail.component';
import { OccasionListComponent } from './occasion-list/occasion-list.component';


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
