import { Component, OnInit } from '@angular/core';
import { TableService } from './table.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  base: String
  date: String
  ratesDict: Object
  objectKeys = Object.keys;
  data = []


  constructor(
    private tableService: TableService
  ) { }

  ngOnInit() {
    this.tableService.getCurrencyUSD().subscribe(data => {
      this.base = data.base
      this.date = data.date
      this.data = Object.keys(data.rates).map(function (key, index) {
        return {
          'key': key,
          'rate': data.rates[key],
          'addTen': data.rates[key] + 10.0002,
        }
      })

    })
  }

  getStyle(rate, key) {
    if (rate != null && this.isEvenNuber(rate))
      return "1px solid red";

    if (key == 'HKD')
      return "1px solid red";
  }

  isEvenNuber(number) {
    return number % 2 == 0
  }

}
