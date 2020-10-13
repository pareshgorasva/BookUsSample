import { AfterViewInit, Component, OnInit } from '@angular/core';

import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

@Component({
  selector: 'app-services-pie-chart',
  templateUrl: './services-pie-chart.component.html',
  styleUrls: ['./services-pie-chart.component.css']
})
export class ServicesPieChartComponent implements  OnInit, AfterViewInit {
  constructor() { }
   data = [{
    "country": "Lithuania",
    "litres": 501.9
  }, {
    "country": "Czechia",
    "litres": 301.9
  }, {
    "country": "Ireland",
    "litres": 201.1
  }, {
    "country": "Germany",
    "litres": 165.8
  }, {
    "country": "Australia",
    "litres": 139.9
  }];
  ngAfterViewInit(): void {
    var chart = am4core.create("servicesPieChart", am4charts.PieChart);
    // Add data
    chart.data = this.data;

    // Add and configure Series
    var pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "litres";
    pieSeries.dataFields.category = "country";
    pieSeries.ticks.template.disabled = true;
    pieSeries.alignLabels = true;
    pieSeries.labels.template.text = "{value.percent.formatNumber('#.0')}%";
    pieSeries.labels.template.align = "right"

    pieSeries.labels.template.radius = am4core.percent(-40);
    pieSeries.labels.template.fill = am4core.color("white");
    pieSeries.labels.template.adapter.add("radius", function (radius, target) {
      // if (target.dataItem && (target.dataItem.values.value.percent < 10)) {
      return 0;
      // }
    });

    pieSeries.labels.template.adapter.add("fill", function (color, target) {
      return color;

      if (target.dataItem && (target.dataItem.values.value.percent < 10)) {
        return am4core.color("#000");
      }
      return color;
    });

    
  }


  ngOnInit() {
  }
}

