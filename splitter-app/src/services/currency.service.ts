import { Injectable } from '@angular/core';


//Import httpclient where i want to use it, not in modules
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CurrencyService {

  constructor(private http: HttpClient) { }

  private fixerApiUrl = "https://api.fixer.io/latest?symbols=USD,JPY";
  this.http.get(fixerApiUrl).subscribe(data => {

    this.results = data["rates"];
  })
}
