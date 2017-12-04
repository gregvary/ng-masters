//handles imports for material design components
//https://coursetro.com/posts/code/113/How-to-Build-an-Angular-5-Material-App

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule } from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';




@NgModule({
  imports: [  MatButtonModule,
              MatToolbarModule,
              MatCardModule,
              MatChipsModule

            ],
  exports: [  MatButtonModule,
              MatToolbarModule,
              MatCardModule,
              MatChipsModule
            ],
})
export class MaterialModule { }
