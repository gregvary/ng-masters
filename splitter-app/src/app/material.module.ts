import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips';

@NgModule({
  imports: [
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatChipsModule
  ],
  exports: [
  	MatToolbarModule,
  	MatCardModule,
  	MatButtonModule,
  	MatChipsModule
  	],
  declarations: []
})
export class MaterialModule { }
