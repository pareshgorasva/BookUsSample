import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { MatSidenav } from '@angular/material'

@Component({
  selector: 'app-left-panel',
  templateUrl: './left-panel.component.html',
  styleUrls: ['./left-panel.component.css'],
  providers: [MatSidenav]
})
export class LeftPanelComponent implements OnInit {

  @Output() opened = new EventEmitter;
  isExpanded:boolean = true;

  navs = [
    {title:'Home', icon:'home'},
    {title:'Calendar', icon:'calendar_today'},
    {title:'Sales', icon:'attach_money'},
    {title:'Client', icon:'home_repair_service'},
    {title:'Staff', icon:'event_seat'},
    {title:'Services', icon:'brightness_7'},
    {title:'Analytiics', icon:'bar_chart'},
    {title:'Setup', icon:'api'},
  ]

  constructor() { }

  ngOnInit() {}

  toggleSideNav() {
    this.isExpanded = !this.isExpanded;
    this.opened.emit(this.isExpanded)
  }

}
