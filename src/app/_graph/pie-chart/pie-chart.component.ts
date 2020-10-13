import { AfterViewInit, Component, OnInit } from '@angular/core';

import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit, AfterViewInit {
  constructor() { }
  ngAfterViewInit(): void {
    var chart = am4core.create("pieChart", am4charts.PieChart);
    // Add data
    chart.data = [{
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

    chart.legend = new am4charts.Legend();
    chart.legend.position = "right";
    chart.legend.scale = 0.7
  }


  ngOnInit() {
  }
}
