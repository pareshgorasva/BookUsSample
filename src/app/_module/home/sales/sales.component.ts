import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

  months:any = ['January','Febraury','March','April','May','Jun','July','August','September','October','November','December'];
  years:any = ['2020','2019','2018','2017','2016'];
  viewSelected:string = 'w';
  stores = [
    {id:1,name:'All'},
    {id:2,name:'Store - 1'},
    {id:3,name:'Store - 2'},
    {id:4,name:'Store - 3'},
    {id:5,name:'Store - 4'}
  ];

  constructor() { }

  ngOnInit() {
  }

  viewSelectedVal(val) {
    console.log(val);
    this.viewSelected = val;
  }

}
