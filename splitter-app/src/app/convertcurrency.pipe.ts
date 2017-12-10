  import { Pipe, PipeTransform } from '@angular/core';

//When you set 'pure' to false, Angular updates the data inside the pipe each cycle.
@Pipe({
  name: 'convertcurrency',
  pure: false

})
export class ConvertcurrencyPipe implements PipeTransform {

  transform(totalSpending: number): string {
    let currency = window.localStorage.getItem("currency");
    let currencyRate = window.localStorage.getItem("currencyRate");

    if(currency == "USD"){
      let convertedSpending: number = (totalSpending * parseFloat(currencyRate));
      let roundedSpending = (Math.round(convertedSpending* 100)/100).toFixed(2);
      var convertedSpendingStr: string = '' + roundedSpending + ' $';
    }
    else if(currency =="JPY"){
      let convertedSpending: number = (totalSpending * parseFloat(currencyRate));
      let roundedSpending = (Math.round(convertedSpending * 100)/100).toFixed(2);
      var convertedSpendingStr: string  = '' + roundedSpending + ' ¥';
    }
    else{
      let convertedSpending: number = (totalSpending * parseFloat(currencyRate));
      let roundedSpending = (Math.round(convertedSpending* 100)/100).toFixed(2);
      var convertedSpendingStr: string  = '' + roundedSpending + ' €';
    }
    return convertedSpendingStr;
  }

}
