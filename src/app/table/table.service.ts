import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TableService {

  constructor(private http: Http) { }

  getCurrencyUSD() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('http://api.fixer.io/latest?base=USD', { headers: headers })
      .map(res => res.json());
  }

}
