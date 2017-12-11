import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { OccasionService } from './occasion.service'

import { AppComponent } from './app.component';
import { OccasionComponent } from './occasion/occasion.component';
import { OccasionListComponent } from './occasion-list/occasion-list.component';
import { OccasionDetailComponent } from './occasion-detail/occasion-detail.component';
import { SplitService } from './split.service';

import { CurrencyService } from '../services/currency.service';
import { ConvertcurrencyPipe } from './convertcurrency.pipe';


@NgModule({
  declarations: [
    AppComponent,
    OccasionComponent,
    OccasionListComponent,
    OccasionDetailComponent,
    ConvertcurrencyPipe
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ OccasionService, SplitService, CurrencyService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
