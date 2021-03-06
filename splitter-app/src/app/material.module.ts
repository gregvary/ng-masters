//handles imports for material design components
//https://coursetro.com/posts/code/113/How-to-Build-an-Angular-5-Material-App

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule, MatToolbarModule } from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatInputModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import {MatListModule} from '@angular/material/list';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  imports: [  MatButtonModule,
              MatToolbarModule,
              MatCardModule,
              MatChipsModule,
              MatFormFieldModule,
              MatInputModule,
              MatIconModule,
              MatDialogModule,
              MatTableModule,
              MatListModule,
              MatSelectModule

            ],
  exports: [  MatButtonModule,
              MatToolbarModule,
              MatCardModule,
              MatChipsModule,
              MatFormFieldModule,
              MatInputModule,
              MatIconModule,
              MatDialogModule,
              MatTableModule,
              MatListModule,
              MatSelectModule
            ],
})
export class MaterialModule { }
