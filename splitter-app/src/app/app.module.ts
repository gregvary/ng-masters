import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { OccasionComponent } from './occasion/occasion.component';
import { OccasionListComponent } from './occasion-list/occasion-list.component';
import { OccasionDetailComponent } from './occasion-detail/occasion-detail.component';

import { AppRoutingModule } from './app-routing.module';

import { OccasionService } from './occasion.service'


@NgModule({
  declarations: [
    AppComponent,
    OccasionComponent,
    OccasionListComponent,
    OccasionDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [ OccasionService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
