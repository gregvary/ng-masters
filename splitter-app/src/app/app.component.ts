import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  title = 'app';
/*
  * image urls have to be the relative paths from index.html
  * images have to be in assets/icon folder
*/
  currencies = [
     {value: 'eur', viewValue: 'EUR ', imageUrl: 'assets/icon/european-union.png'},
     {value: 'usd', viewValue: 'USD ', imageUrl: 'assets/icon/united-states.png'},
     {value: 'jpy', viewValue: 'JPY ', imageUrl: 'assets/icon/japan.png'}
   ];

currencyPlaceholder = 'Select Currency';
selectedItem = "eur";
getSelectedValue(selectedItem){

  console.log('selected currency: ', selectedItem);
}

}
