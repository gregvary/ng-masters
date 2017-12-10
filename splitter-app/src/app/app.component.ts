import { Component, AfterViewInit } from '@angular/core';

import { CurrencyService } from '../services/currency.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  constructor(private currencyService: CurrencyService ){}
  title = 'app';
/*
  * image urls have to be the relative paths from index.html
  * images have to be in assets/icon folder
*/
  currencies = [
     {value: 'EUR', viewValue: 'EUR ', imageUrl: 'assets/icon/european-union.png'},
     {value: 'USD', viewValue: 'USD ', imageUrl: 'assets/icon/united-states.png'},
     {value: 'JPY', viewValue: 'JPY ', imageUrl: 'assets/icon/japan.png'}
   ];



selectedItem = "EUR";

ngAfterViewInit(){

  window.localStorage.setItem("currency", this.selectedItem);
  window.localStorage.setItem("currencyRate", "1");

}



getSelectedValue(selectedItem){
  console.log('selected currency: ', selectedItem);
  //save selected value as selected currency in local storage
  window.localStorage.setItem("currency", selectedItem)
  this.currencyService.fetchCurrencies();
}

}
