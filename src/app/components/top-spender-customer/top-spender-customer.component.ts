import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'parth', weight: 1.0079, symbol: '3 Hours Ago'},
  {position: 2, name: 'Godhani', weight: 4.0026, symbol: '3 Hours Ago'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: '3 Hours Ago'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: '3 Hours Ago'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: '3 Hours Ago'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: '3 Hours Ago'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: '3 Hours Ago'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: '3 Hours Ago'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: '3 Hours Ago'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: '3 Hours Ago'},
  {position: 11, name: 'Neon', weight: 20.1797, symbol: '3 Hours Ago'},
];
@Component({
  selector: 'app-top-spender-customer',
  templateUrl: './top-spender-customer.component.html',
  styleUrls: ['./top-spender-customer.component.css']
})
export class TopSpenderCustomerComponent implements OnInit {
  displayedColumns: string[] = ['position', 'Name', 'Spent', 'Last Session'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit() {
  }

}
