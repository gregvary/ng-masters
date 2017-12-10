//handles imports for material design components
//https://coursetro.com/posts/code/113/How-to-Build-an-Angular-5-Material-App

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule, MatToolbarModule } from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatChipInputEvent} from '@angular/material';
import {ENTER, COMMA} from '@angular/cdk/keycodes';
import {MatInputModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';





@NgModule({
  imports: [  MatButtonModule,
              MatToolbarModule,
              MatCardModule,
              MatChipsModule,
              MatFormFieldModule,
              MatInputModule,
              MatIconModule

            ],
  exports: [  MatButtonModule,
              MatToolbarModule,
              MatCardModule,
              MatChipsModule,
              MatFormFieldModule,
              MatInputModule,
              MatIconModule
            ],
})
export class MaterialModule { }
