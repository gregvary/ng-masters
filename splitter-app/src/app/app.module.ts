import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { OccasionComponent } from './occasion/occasion.component';
import { OccasionService } from './occasion.service';
import { OccasionListComponent } from './occasion-list/occasion-list.component';
import { AppRoutingModule } from './app-routing.module';
import { OccasionDetailComponent } from './occasion-detail/occasion-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    OccasionComponent,
    OccasionListComponent,
    OccasionDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [OccasionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
