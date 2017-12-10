import { Injectable } from '@angular/core';

//Import httpclient where i want to use it, not in modules
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CurrencyService {

  constructor(private http: HttpClient) { }


  fetchCurrencies(): any{

  let currency = window.localStorage.getItem("currency");
  this.http.get("https://api.fixer.io/latest?symbols=" + currency).subscribe(data => {
    let results = data["rates"];
    console.log(data["rates"])

  if(results.USD != undefined){
    console.log("US Kurs ",results.USD);
    window.localStorage.setItem("currencyRate", results.USD);
  }
  else if(results.JPY != undefined){
    console.log("Yen-Kurs", results.JPY);
    window.localStorage.setItem("currencyRate", results.JPY);
  }
  else{
    window.localStorage.setItem("currencyRate", "1");
  }
  })
}
}
