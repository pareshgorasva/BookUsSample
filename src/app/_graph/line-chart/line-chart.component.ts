import { Component, Inject, NgZone, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent {

  private chart: am4charts.XYChart;

  constructor(@Inject(PLATFORM_ID) private platformId, private zone: NgZone) { }

  // Run the function only in the browser
  browserOnly(f: () => void) {
    if (isPlatformBrowser(this.platformId)) {
      this.zone.runOutsideAngular(() => {
        f();
      });
    }
  }

  ngAfterViewInit() {
    // Chart code goes in here
    this.browserOnly(() => {
      am4core.useTheme(am4themes_animated);

      let chart = am4core.create("chartdiv", am4charts.XYChart);

      chart.paddingRight = 20;

      let data = [];
      let visits = 10;
      // for (let i = 1; i < 366; i++) {
      //   visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
      //   data.push({ date: new Date(2018, 0, i), name: "name" + i, value: visits });
      // }

      chart.data = [
        { date: new Date(2019, 5, 12), Kalgoorie: 250, Busselton: 48,Mandurah:500},
        { date: new Date(2019, 5, 13), Kalgoorie: 0, Busselton: 300,Mandurah:200},
        { date: new Date(2019, 5, 14), Kalgoorie: 120, Busselton: 480,Mandurah:600},
        { date: new Date(2019, 5, 15), Kalgoorie: 300, Busselton: 272,Mandurah:200},
        { date: new Date(2019, 5, 16), Kalgoorie: 150, Busselton: 144,Mandurah:400},
        { date: new Date(2019, 5, 17), Kalgoorie: 200, Busselton: 402,Mandurah:272},
        { date: new Date(2019, 5, 18), Kalgoorie: 180, Busselton: 550,Mandurah:300}
      ];

      // Create axes
      var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
      dateAxis.renderer.minGridDistance = 50;

      var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

      // Create series
      var series = chart.series.push(new am4charts.LineSeries());
      series.dataFields.valueY = "Kalgoorie";
      series.dataFields.dateX = "date";
      series.strokeWidth = 2;
      series.minBulletDistance = 10;
      series.tooltipText = "[bold]{date.formatDate()}:[/] {Kalgoorie}}";
      series.tooltip.pointerOrientation = "vertical";

      var bullet = series.bullets.push(new am4charts.CircleBullet());
      bullet.circle.strokeWidth = 2;
      bullet.circle.radius = 4;
      bullet.circle.fill = am4core.color("#fff");
      // Create series
      var series2 = chart.series.push(new am4charts.LineSeries());
      series2.dataFields.valueY = "Busselton";
      series2.dataFields.dateX = "date";
      series2.strokeWidth = 2;
      series2.minBulletDistance = 10;
      series2.tooltipText = "[bold]{date.formatDate()}:[/] {Busselton}";
      series2.tooltip.pointerOrientation = "vertical";

      var bullet = series2.bullets.push(new am4charts.CircleBullet());
      bullet.circle.strokeWidth = 2;
      bullet.circle.radius = 4;
      bullet.circle.fill = am4core.color("#fff");

      var series3 = chart.series.push(new am4charts.LineSeries());
      series3.dataFields.valueY = "Mandurah";
      series3.dataFields.dateX = "date";
      series3.strokeWidth = 2;
      series3.minBulletDistance = 10;
      series3.tooltipText = "[bold]{date.formatDate()}:[/] {Mandurah}";
      series3.tooltip.pointerOrientation = "vertical";
      
      var bullet = series3.bullets.push(new am4charts.CircleBullet());
      bullet.circle.strokeWidth = 2;
      bullet.circle.radius = 4;
      bullet.circle.fill = am4core.color("#fff");
      
      // Add cursor
      chart.cursor = new am4charts.XYCursor();
      chart.cursor.xAxis = dateAxis;

      this.chart = chart;
    });
  }
  

  ngOnDestroy() {
    // Clean up chart when the component is removed
    this.browserOnly(() => {
      if (this.chart) {
        this.chart.dispose();
      }
    });
  }

}
