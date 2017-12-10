import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { OccasionComponent } from './occasion/occasion.component';
import { OccasionListComponent } from './occasion-list/occasion-list.component';
import { CurrencyService } from '../services/currency.service';
import { ConvertcurrencyPipe } from './convertcurrency.pipe';


@NgModule({
  declarations: [
    AppComponent,
    OccasionComponent,
    OccasionListComponent,
    ConvertcurrencyPipe
  ],
  imports: [

    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [CurrencyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
