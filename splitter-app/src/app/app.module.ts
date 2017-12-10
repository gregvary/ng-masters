import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';



import { AppComponent } from './app.component';
import { OccasionComponent } from './occasion/occasion.component';
import { OccasionService } from './occasion.service';
import { OccasionListComponent } from './occasion-list/occasion-list.component';


@NgModule({
  declarations: [
    AppComponent,
    OccasionComponent,
    OccasionListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [OccasionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
