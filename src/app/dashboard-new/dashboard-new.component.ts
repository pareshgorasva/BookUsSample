import { Component, OnInit, ChangeDetectorRef, ViewChild } from "@angular/core";
import { FormControl } from "@angular/forms";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_spirited from "@amcharts/amcharts4/themes/frozen";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { MatPaginator, MatTableDataSource } from "@angular/material";

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
  {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
  {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
  {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
  {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
  {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
  {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
  {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
  {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
  {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
];

interface Food {
  value: string;
  viewValue: string;
}
@Component({
    selector: "app-dashboard-new",
    templateUrl: "./dashboard-new.component.html",
    styleUrls: ["./dashboard-new.component.scss"],
  })

  export class DashboardNewComponent implements OnInit {


    ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
    }

    displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
    dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  
    @ViewChild(MatPaginator) paginator: MatPaginator;

    gender = {
      title:'Customer Gender',
      subTitle:'As of Month Selected',
      data:[
        {title:'Male', value:'278', percentage:'53%'},
        {title:'Female', value:'246', percentage:'47%'}
      ]
    }

    customer = {
      title:'New vs Return',
      subTitle:'As of Month Selected',
      data:[
        {title:'Retured', value:'549', percentage:'77%'},
        {title:'New', value:'269', percentage:'33%'}
      ]
    }



    constructor() {}
    toppings = new FormControl();
    toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
    foods: Food[] = [
      {value: 'steak-0', viewValue: 'Steak'},
      {value: 'pizza-1', viewValue: 'Pizza'},
      {value: 'tacos-2', viewValue: 'Tacos'}
    ];
    ngOnInit() {
      this.plotLineChart();
      this.plotPieFirstChart();
      this.plotPieFirstChart1();
      this.plotPieFirstChart2();
      this.plotPieFirstChart3();
      this.plotPaymentmethods();
      this.plotProfitMethods();
    }

    plotLineChart() {
      am4core.useTheme(am4themes_spirited);
      am4core.useTheme(am4themes_animated);
      // Themes end
      
      // Create chart instance
      let chart = am4core.create("lineChart", am4charts.XYChart);
      
      // Add data
      chart.data = [{
        "year": "Sep 1st 2020",
        "italy": 10,
        "germany": 55,
        "uk": 300
      }, {
        "year": "Sep 3rd 2020",
        "italy": 100,
        "germany": 200,
        "uk": 60
      }, {
        "year": "Sep 5th 2020",
        "italy": 20,
        "germany": 300,
        "uk": 120
      }, {
        "year": "Sep 7th 2020",
        "italy": 310,
        "germany": 140,
        "uk": 210
      }, {
        "year": "Sep 13th 2020",
        "italy": 50,
        "germany": 100,
        "uk": 200
      }, {
        "year": "Sep 15th 2020",
        "italy": 30,
        "germany": 200,
        "uk": 150
      }, {
        "year": "Sep 19th 2020",
        "italy": 160,
        "germany": 210,
        "uk": 390
      }, {
        "year": "Sep 23rd 2020",
        "italy": 210,
        "germany": 100,
        "uk": 500
      }, {
        "year": "Sep 30th 2020",
        "italy": 310,
        "germany": 570,
        "uk": 200
      }];
      
      // Create category axis
      let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
      categoryAxis.dataFields.category = "year";
      categoryAxis.renderer.opposite = false;
      categoryAxis.renderer.labels.template.rotation = -50;
      categoryAxis.renderer.minGridDistance = 30;
      categoryAxis.renderer.grid.template.disabled = true;
      categoryAxis.renderer.labels.template.dx = -20;
      
      // Create value axis
      let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.renderer.inversed = false;
      valueAxis.title.text = "Place taken";
      valueAxis.renderer.minLabelPosition = 0.01;
      
      // Create series
      let series1 = chart.series.push(new am4charts.LineSeries());
      series1.dataFields.valueY = "italy";
      series1.dataFields.categoryX = "year";
      series1.name = "Italy";
      series1.bullets.push(new am4charts.CircleBullet());
      series1.tooltipText = "Place taken by {name} in {categoryX}: {valueY}";
      series1.legendSettings.valueText = "{valueY}";
      series1.visible  = false;
      
      let series2 = chart.series.push(new am4charts.LineSeries());
      series2.dataFields.valueY = "germany";
      series2.dataFields.categoryX = "year";
      series2.name = 'Germany';
      series2.bullets.push(new am4charts.CircleBullet());
      series2.tooltipText = "Place taken by {name} in {categoryX}: {valueY}";
      series2.legendSettings.valueText = "{valueY}";
      
      let series3 = chart.series.push(new am4charts.LineSeries());
      series3.dataFields.valueY = "uk";
      series3.dataFields.categoryX = "year";
      series3.name = 'United Kingdom';
      series3.bullets.push(new am4charts.CircleBullet());
      series3.tooltipText = "Place taken by {name} in {categoryX}: {valueY}";
      series3.legendSettings.valueText = "{valueY}";
      
      // Add chart cursor
      chart.cursor = new am4charts.XYCursor();
      chart.cursor.behavior = "zoomY";
      
      
      let hs1 = series1.segments.template.states.create("hover")
      hs1.properties.strokeWidth = 5;
      series1.segments.template.strokeWidth = 1;
      
      let hs2 = series2.segments.template.states.create("hover")
      hs2.properties.strokeWidth = 5;
      series2.segments.template.strokeWidth = 1;
      
      let hs3 = series3.segments.template.states.create("hover")
      hs3.properties.strokeWidth = 5;
      series3.segments.template.strokeWidth = 1;
      
      // Add legend
      chart.legend = new am4charts.Legend();
      chart.legend.itemContainers.template.events.on("over", function(event){
        //@ts-ignore
        let segments = event.target.dataItem.dataContext.segments;
        segments.each(function(segment){
          segment.isHover = true;
        })
      })
      
      chart.legend.itemContainers.template.events.on("out", function(event){
        //@ts-ignore
        let segments = event.target.dataItem.dataContext.segments;
        segments.each(function(segment){
          segment.isHover = false;
        })
      })

      chart.exporting.menu = new am4core.ExportMenu();
      chart.exporting.menu.items = [
        {
          label:
            "<img width=30 height=30 src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsSAAALEgHS3X78AAACEElEQVRoge2b3U3DMBRGvyLe6Qa1Jb/TDSgTUDagE9ANSDeACSgblAkoG5R3S/YIZYIiSzdSwG1qh9pNHB8pD72OYp34304Hu90OfeKiV7ZZuAdk4dTJwqmThVOnk8KC8Qcr6EhXS/i1qXSXq3Qj6c4JC8ZZ5ae3dCdWSyRZAJgCuLJuAGZSq6UV3YOXsEPGp2IhtSoE40PK79HhuU7SzsKC8TGANV3P1g2nRQPYUl7XHk/mUittRStcWpHDrMwltWo8JPggGN94ys6OycK106LSHQGYW4kBEIwXDWSd2rBrL23a0qfUamulnBjqJ54qT/0ybRrALVXZQVNZeFbpWJS1yIjOpVbrmny9ZNsqbEaAN4e+wlsWbRMuRwIH2Xup1cqKOtC2mZY+JisYn9Bw1YhWCTt2ih8AxlbUkbweDolg/OjEIDSxS3hkRSKTq3TqZOHUycKpE0zYrGkF47WTe5MuGI+yxi4JWcJmG2h8SLqMS61Cbxf9IpgwzYsn+6QrsrULhRAEbcP7pM8pixidVlW6EjuLLGL10hXpxTllEXPHg6QLKyEyeRxOnSycOlm4BnY4KTqNj3xchc1J3og2ys+GYNycSnxLrTZBhWkMfQGw/PPJQTToZS//ezbtcyA+pAzvALxTqcfCzNJuHM+cavH+xoPe9NRKCM/qP1W5JP8FIHWycOpk4dTJwqnTL2EAP5QSu34+E9+tAAAAAElFTkSuQmCC'><img>",
            "menu": [
              {
                "label": "Image",
                "menu": [
                  { "type": "png", "label": "PNG" },
                  { "type": "jpg", "label": "JPG" },
                  { "type": "svg", "label": "SVG" },
                  { "type": "pdf", "label": "PDF" }
                ]
              }, {
                "label": "Data",
                "menu": [
                  { "type": "json", "label": "JSON" },
                  { "type": "csv", "label": "CSV" },
                  { "type": "xlsx", "label": "XLSX" },
                  { "type": "html", "label": "HTML" },
                  { "type": "pdfdata", "label": "PDF" }
                ]
              }, {
                "label": "Print", "type": "print"
              }
            ],
        },
      ];
      chart.exporting.filePrefix = 'platformSale'
        // "topPlatform" + " " + "week-" + this.filterData.week[0];
      chart.exporting.menu.align = "right";
      chart.exporting.menu.verticalAlign = "top";
      
    }

    plotPieFirstChart() {
      /* Chart code */
// Themes begin
am4core.useTheme(am4themes_spirited);
am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
let chart = am4core.create("pieChartFirst", am4charts.PieChart);

// Add data
chart.data = [ {
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
}, {
  "country": "Austria",
  "litres": 128.3
}, {
  "country": "UK",
  "litres": 99
}
];

// Add and configure Series
let pieSeries = chart.series.push(new am4charts.PieSeries());
pieSeries.dataFields.value = "litres";
pieSeries.dataFields.category = "country";
pieSeries.slices.template.stroke = am4core.color("#fff");
pieSeries.slices.template.strokeOpacity = 1;
pieSeries.ticks.template.disabled = true;
pieSeries.labels.template.disabled = true;

// This creates initial animation
pieSeries.hiddenState.properties.opacity = 1;
pieSeries.hiddenState.properties.endAngle = -90;
pieSeries.hiddenState.properties.startAngle = -90;

chart.hiddenState.properties.radius = am4core.percent(0);
chart.legend = new am4charts.Legend();
chart.legend.position = "right";
// chart.legend.maxHeight = 100;
chart.legend.width = 100

chart.exporting.menu = new am4core.ExportMenu();
chart.exporting.menu.items = [
  {
    label:
      "<img width=30 height=30 src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsSAAALEgHS3X78AAACEElEQVRoge2b3U3DMBRGvyLe6Qa1Jb/TDSgTUDagE9ANSDeACSgblAkoG5R3S/YIZYIiSzdSwG1qh9pNHB8pD72OYp34304Hu90OfeKiV7ZZuAdk4dTJwqmThVOnk8KC8Qcr6EhXS/i1qXSXq3Qj6c4JC8ZZ5ae3dCdWSyRZAJgCuLJuAGZSq6UV3YOXsEPGp2IhtSoE40PK79HhuU7SzsKC8TGANV3P1g2nRQPYUl7XHk/mUittRStcWpHDrMwltWo8JPggGN94ys6OycK106LSHQGYW4kBEIwXDWSd2rBrL23a0qfUamulnBjqJ54qT/0ybRrALVXZQVNZeFbpWJS1yIjOpVbrmny9ZNsqbEaAN4e+wlsWbRMuRwIH2Xup1cqKOtC2mZY+JisYn9Bw1YhWCTt2ih8AxlbUkbweDolg/OjEIDSxS3hkRSKTq3TqZOHUycKpE0zYrGkF47WTe5MuGI+yxi4JWcJmG2h8SLqMS61Cbxf9IpgwzYsn+6QrsrULhRAEbcP7pM8pixidVlW6EjuLLGL10hXpxTllEXPHg6QLKyEyeRxOnSycOlm4BnY4KTqNj3xchc1J3og2ys+GYNycSnxLrTZBhWkMfQGw/PPJQTToZS//ezbtcyA+pAzvALxTqcfCzNJuHM+cavH+xoPe9NRKCM/qP1W5JP8FIHWycOpk4dTJwqnTL2EAP5QSu34+E9+tAAAAAElFTkSuQmCC'><img>",
      "menu": [
        {
          "label": "Image",
          "menu": [
            { "type": "png", "label": "PNG" },
            { "type": "jpg", "label": "JPG" },
            { "type": "svg", "label": "SVG" },
            { "type": "pdf", "label": "PDF" }
          ]
        }, {
          "label": "Data",
          "menu": [
            { "type": "json", "label": "JSON" },
            { "type": "csv", "label": "CSV" },
            { "type": "xlsx", "label": "XLSX" },
            { "type": "html", "label": "HTML" },
            { "type": "pdfdata", "label": "PDF" }
          ]
        }, {
          "label": "Print", "type": "print"
        }
      ],
  },
];
chart.exporting.filePrefix = 'platformSale'
  // "topPlatform" + " " + "week-" + this.filterData.week[0];
chart.exporting.menu.align = "left";
chart.exporting.menu.verticalAlign = "top";

}


plotPieFirstChart1() {
  /* Chart code */
// Themes begin
am4core.useTheme(am4themes_spirited);
am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
let chart = am4core.create("pieChartFirst1", am4charts.PieChart);

// Add data
chart.data = [ {
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
}, {
"country": "Austria",
"litres": 128.3
}, {
"country": "UK",
"litres": 99
}
];

// Add and configure Series
let pieSeries = chart.series.push(new am4charts.PieSeries());
pieSeries.dataFields.value = "litres";
pieSeries.dataFields.category = "country";
pieSeries.slices.template.stroke = am4core.color("#fff");
pieSeries.slices.template.strokeOpacity = 1;
pieSeries.ticks.template.disabled = true;
pieSeries.labels.template.disabled = true;

// This creates initial animation
pieSeries.hiddenState.properties.opacity = 1;
pieSeries.hiddenState.properties.endAngle = -90;
pieSeries.hiddenState.properties.startAngle = -90;

chart.hiddenState.properties.radius = am4core.percent(0);
// chart.legend = new am4charts.Legend();
// chart.legend.position = "right";
// // chart.legend.maxHeight = 100;
// chart.legend.width = 100

chart.exporting.menu = new am4core.ExportMenu();
chart.exporting.menu.items = [
{
label:
  "<img width=30 height=30 src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsSAAALEgHS3X78AAACEElEQVRoge2b3U3DMBRGvyLe6Qa1Jb/TDSgTUDagE9ANSDeACSgblAkoG5R3S/YIZYIiSzdSwG1qh9pNHB8pD72OYp34304Hu90OfeKiV7ZZuAdk4dTJwqmThVOnk8KC8Qcr6EhXS/i1qXSXq3Qj6c4JC8ZZ5ae3dCdWSyRZAJgCuLJuAGZSq6UV3YOXsEPGp2IhtSoE40PK79HhuU7SzsKC8TGANV3P1g2nRQPYUl7XHk/mUittRStcWpHDrMwltWo8JPggGN94ys6OycK106LSHQGYW4kBEIwXDWSd2rBrL23a0qfUamulnBjqJ54qT/0ybRrALVXZQVNZeFbpWJS1yIjOpVbrmny9ZNsqbEaAN4e+wlsWbRMuRwIH2Xup1cqKOtC2mZY+JisYn9Bw1YhWCTt2ih8AxlbUkbweDolg/OjEIDSxS3hkRSKTq3TqZOHUycKpE0zYrGkF47WTe5MuGI+yxi4JWcJmG2h8SLqMS61Cbxf9IpgwzYsn+6QrsrULhRAEbcP7pM8pixidVlW6EjuLLGL10hXpxTllEXPHg6QLKyEyeRxOnSycOlm4BnY4KTqNj3xchc1J3og2ys+GYNycSnxLrTZBhWkMfQGw/PPJQTToZS//ezbtcyA+pAzvALxTqcfCzNJuHM+cavH+xoPe9NRKCM/qP1W5JP8FIHWycOpk4dTJwqnTL2EAP5QSu34+E9+tAAAAAElFTkSuQmCC'><img>",
  "menu": [
    {
      "label": "Image",
      "menu": [
        { "type": "png", "label": "PNG" },
        { "type": "jpg", "label": "JPG" },
        { "type": "svg", "label": "SVG" },
        { "type": "pdf", "label": "PDF" }
      ]
    }, {
      "label": "Data",
      "menu": [
        { "type": "json", "label": "JSON" },
        { "type": "csv", "label": "CSV" },
        { "type": "xlsx", "label": "XLSX" },
        { "type": "html", "label": "HTML" },
        { "type": "pdfdata", "label": "PDF" }
      ]
    }, {
      "label": "Print", "type": "print"
    }
  ],
},
];
chart.exporting.filePrefix = 'platformSale'
// "topPlatform" + " " + "week-" + this.filterData.week[0];
chart.exporting.menu.align = "left";
chart.exporting.menu.verticalAlign = "top";

}

plotPieFirstChart2() {
  /* Chart code */
// Themes begin
am4core.useTheme(am4themes_spirited);
am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
let chart = am4core.create("pieChartFirst2", am4charts.PieChart);

// Add data
chart.data = [ {
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
}, {
"country": "Austria",
"litres": 128.3
}, {
"country": "UK",
"litres": 99
}
];

// Add and configure Series
let pieSeries = chart.series.push(new am4charts.PieSeries());
pieSeries.dataFields.value = "litres";
pieSeries.dataFields.category = "country";
pieSeries.slices.template.stroke = am4core.color("#fff");
pieSeries.slices.template.strokeOpacity = 1;
pieSeries.ticks.template.disabled = true;
pieSeries.labels.template.disabled = true;

// This creates initial animation
pieSeries.hiddenState.properties.opacity = 1;
pieSeries.hiddenState.properties.endAngle = -90;
pieSeries.hiddenState.properties.startAngle = -90;

chart.hiddenState.properties.radius = am4core.percent(0);
chart.legend = new am4charts.Legend();
chart.legend.position = "right";
// chart.legend.maxHeight = 100;
chart.legend.width = 100

chart.exporting.menu = new am4core.ExportMenu();
chart.exporting.menu.items = [
{
label:
  "<img width=30 height=30 src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsSAAALEgHS3X78AAACEElEQVRoge2b3U3DMBRGvyLe6Qa1Jb/TDSgTUDagE9ANSDeACSgblAkoG5R3S/YIZYIiSzdSwG1qh9pNHB8pD72OYp34304Hu90OfeKiV7ZZuAdk4dTJwqmThVOnk8KC8Qcr6EhXS/i1qXSXq3Qj6c4JC8ZZ5ae3dCdWSyRZAJgCuLJuAGZSq6UV3YOXsEPGp2IhtSoE40PK79HhuU7SzsKC8TGANV3P1g2nRQPYUl7XHk/mUittRStcWpHDrMwltWo8JPggGN94ys6OycK106LSHQGYW4kBEIwXDWSd2rBrL23a0qfUamulnBjqJ54qT/0ybRrALVXZQVNZeFbpWJS1yIjOpVbrmny9ZNsqbEaAN4e+wlsWbRMuRwIH2Xup1cqKOtC2mZY+JisYn9Bw1YhWCTt2ih8AxlbUkbweDolg/OjEIDSxS3hkRSKTq3TqZOHUycKpE0zYrGkF47WTe5MuGI+yxi4JWcJmG2h8SLqMS61Cbxf9IpgwzYsn+6QrsrULhRAEbcP7pM8pixidVlW6EjuLLGL10hXpxTllEXPHg6QLKyEyeRxOnSycOlm4BnY4KTqNj3xchc1J3og2ys+GYNycSnxLrTZBhWkMfQGw/PPJQTToZS//ezbtcyA+pAzvALxTqcfCzNJuHM+cavH+xoPe9NRKCM/qP1W5JP8FIHWycOpk4dTJwqnTL2EAP5QSu34+E9+tAAAAAElFTkSuQmCC'><img>",
  "menu": [
    {
      "label": "Image",
      "menu": [
        { "type": "png", "label": "PNG" },
        { "type": "jpg", "label": "JPG" },
        { "type": "svg", "label": "SVG" },
        { "type": "pdf", "label": "PDF" }
      ]
    }, {
      "label": "Data",
      "menu": [
        { "type": "json", "label": "JSON" },
        { "type": "csv", "label": "CSV" },
        { "type": "xlsx", "label": "XLSX" },
        { "type": "html", "label": "HTML" },
        { "type": "pdfdata", "label": "PDF" }
      ]
    }, {
      "label": "Print", "type": "print"
    }
  ],
},
];
chart.exporting.filePrefix = 'platformSale'
// "topPlatform" + " " + "week-" + this.filterData.week[0];
chart.exporting.menu.align = "left";
chart.exporting.menu.verticalAlign = "top";

}

plotPieFirstChart3() {
  /* Chart code */
// Themes begin
am4core.useTheme(am4themes_spirited);
am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
let chart = am4core.create("pieChartFirst3", am4charts.PieChart);

// Add data
chart.data = [ {
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
}, {
"country": "Austria",
"litres": 128.3
}, {
"country": "UK",
"litres": 99
}
];

// Add and configure Series
let pieSeries = chart.series.push(new am4charts.PieSeries());
pieSeries.dataFields.value = "litres";
pieSeries.dataFields.category = "country";
pieSeries.slices.template.stroke = am4core.color("#fff");
pieSeries.slices.template.strokeOpacity = 1;
pieSeries.ticks.template.disabled = true;
pieSeries.labels.template.disabled = true;

// This creates initial animation
pieSeries.hiddenState.properties.opacity = 1;
pieSeries.hiddenState.properties.endAngle = -90;
pieSeries.hiddenState.properties.startAngle = -90;

chart.hiddenState.properties.radius = am4core.percent(0);
chart.legend = new am4charts.Legend();
chart.legend.position = "right";
// chart.legend.maxHeight = 100;
chart.legend.width = 100

chart.exporting.menu = new am4core.ExportMenu();
chart.exporting.menu.items = [
{
label:
  "<img width=30 height=30 src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsSAAALEgHS3X78AAACEElEQVRoge2b3U3DMBRGvyLe6Qa1Jb/TDSgTUDagE9ANSDeACSgblAkoG5R3S/YIZYIiSzdSwG1qh9pNHB8pD72OYp34304Hu90OfeKiV7ZZuAdk4dTJwqmThVOnk8KC8Qcr6EhXS/i1qXSXq3Qj6c4JC8ZZ5ae3dCdWSyRZAJgCuLJuAGZSq6UV3YOXsEPGp2IhtSoE40PK79HhuU7SzsKC8TGANV3P1g2nRQPYUl7XHk/mUittRStcWpHDrMwltWo8JPggGN94ys6OycK106LSHQGYW4kBEIwXDWSd2rBrL23a0qfUamulnBjqJ54qT/0ybRrALVXZQVNZeFbpWJS1yIjOpVbrmny9ZNsqbEaAN4e+wlsWbRMuRwIH2Xup1cqKOtC2mZY+JisYn9Bw1YhWCTt2ih8AxlbUkbweDolg/OjEIDSxS3hkRSKTq3TqZOHUycKpE0zYrGkF47WTe5MuGI+yxi4JWcJmG2h8SLqMS61Cbxf9IpgwzYsn+6QrsrULhRAEbcP7pM8pixidVlW6EjuLLGL10hXpxTllEXPHg6QLKyEyeRxOnSycOlm4BnY4KTqNj3xchc1J3og2ys+GYNycSnxLrTZBhWkMfQGw/PPJQTToZS//ezbtcyA+pAzvALxTqcfCzNJuHM+cavH+xoPe9NRKCM/qP1W5JP8FIHWycOpk4dTJwqnTL2EAP5QSu34+E9+tAAAAAElFTkSuQmCC'><img>",
  "menu": [
    {
      "label": "Image",
      "menu": [
        { "type": "png", "label": "PNG" },
        { "type": "jpg", "label": "JPG" },
        { "type": "svg", "label": "SVG" },
        { "type": "pdf", "label": "PDF" }
      ]
    }, {
      "label": "Data",
      "menu": [
        { "type": "json", "label": "JSON" },
        { "type": "csv", "label": "CSV" },
        { "type": "xlsx", "label": "XLSX" },
        { "type": "html", "label": "HTML" },
        { "type": "pdfdata", "label": "PDF" }
      ]
    }, {
      "label": "Print", "type": "print"
    }
  ],
},
];
chart.exporting.filePrefix = 'platformSale'
// "topPlatform" + " " + "week-" + this.filterData.week[0];
chart.exporting.menu.align = "left";
chart.exporting.menu.verticalAlign = "top";

}

plotPaymentmethods() {

  /* Chart code */
// Themes begin
am4core.useTheme(am4themes_spirited);
am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
let chart = am4core.create("plotPayment", am4charts.PieChart);

// Add data
chart.data = [ {
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
}, {
"country": "Austria",
"litres": 128.3
}, {
"country": "UK",
"litres": 99
}
];

// Add and configure Series
let pieSeries = chart.series.push(new am4charts.PieSeries());
pieSeries.dataFields.value = "litres";
pieSeries.dataFields.category = "country";
pieSeries.slices.template.stroke = am4core.color("#fff");
pieSeries.slices.template.strokeOpacity = 1;
pieSeries.ticks.template.disabled = true;
pieSeries.labels.template.disabled = true;

// This creates initial animation
pieSeries.hiddenState.properties.opacity = 1;
pieSeries.hiddenState.properties.endAngle = -90;
pieSeries.hiddenState.properties.startAngle = -90;

chart.hiddenState.properties.radius = am4core.percent(0);
// chart.legend = new am4charts.Legend();
// chart.legend.position = "right";
// // chart.legend.maxHeight = 100;
// chart.legend.width = 100

chart.exporting.menu = new am4core.ExportMenu();
chart.exporting.menu.items = [
{
label:
  "<img width=30 height=30 src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsSAAALEgHS3X78AAACEElEQVRoge2b3U3DMBRGvyLe6Qa1Jb/TDSgTUDagE9ANSDeACSgblAkoG5R3S/YIZYIiSzdSwG1qh9pNHB8pD72OYp34304Hu90OfeKiV7ZZuAdk4dTJwqmThVOnk8KC8Qcr6EhXS/i1qXSXq3Qj6c4JC8ZZ5ae3dCdWSyRZAJgCuLJuAGZSq6UV3YOXsEPGp2IhtSoE40PK79HhuU7SzsKC8TGANV3P1g2nRQPYUl7XHk/mUittRStcWpHDrMwltWo8JPggGN94ys6OycK106LSHQGYW4kBEIwXDWSd2rBrL23a0qfUamulnBjqJ54qT/0ybRrALVXZQVNZeFbpWJS1yIjOpVbrmny9ZNsqbEaAN4e+wlsWbRMuRwIH2Xup1cqKOtC2mZY+JisYn9Bw1YhWCTt2ih8AxlbUkbweDolg/OjEIDSxS3hkRSKTq3TqZOHUycKpE0zYrGkF47WTe5MuGI+yxi4JWcJmG2h8SLqMS61Cbxf9IpgwzYsn+6QrsrULhRAEbcP7pM8pixidVlW6EjuLLGL10hXpxTllEXPHg6QLKyEyeRxOnSycOlm4BnY4KTqNj3xchc1J3og2ys+GYNycSnxLrTZBhWkMfQGw/PPJQTToZS//ezbtcyA+pAzvALxTqcfCzNJuHM+cavH+xoPe9NRKCM/qP1W5JP8FIHWycOpk4dTJwqnTL2EAP5QSu34+E9+tAAAAAElFTkSuQmCC'><img>",
  "menu": [
    {
      "label": "Image",
      "menu": [
        { "type": "png", "label": "PNG" },
        { "type": "jpg", "label": "JPG" },
        { "type": "svg", "label": "SVG" },
        { "type": "pdf", "label": "PDF" }
      ]
    }, {
      "label": "Data",
      "menu": [
        { "type": "json", "label": "JSON" },
        { "type": "csv", "label": "CSV" },
        { "type": "xlsx", "label": "XLSX" },
        { "type": "html", "label": "HTML" },
        { "type": "pdfdata", "label": "PDF" }
      ]
    }, {
      "label": "Print", "type": "print"
    }
  ],
},
];
chart.exporting.filePrefix = 'platformSale'
// "topPlatform" + " " + "week-" + this.filterData.week[0];
chart.exporting.menu.align = "left";
chart.exporting.menu.verticalAlign = "top";

}

plotProfitMethods() {
  /* Chart code */
// Themes begin
am4core.useTheme(am4themes_spirited);
am4core.useTheme(am4themes_animated);
// Themes end

// Create chart instance
let chart = am4core.create("plotProfits", am4charts.PieChart);

// Add data
chart.data = [ {
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
}, {
"country": "Austria",
"litres": 128.3
}, {
"country": "UK",
"litres": 99
}
];

// Add and configure Series
let pieSeries = chart.series.push(new am4charts.PieSeries());
pieSeries.dataFields.value = "litres";
pieSeries.dataFields.category = "country";
pieSeries.slices.template.stroke = am4core.color("#fff");
pieSeries.slices.template.strokeOpacity = 1;
pieSeries.ticks.template.disabled = true;
pieSeries.labels.template.disabled = true;

// This creates initial animation
pieSeries.hiddenState.properties.opacity = 1;
pieSeries.hiddenState.properties.endAngle = -90;
pieSeries.hiddenState.properties.startAngle = -90;

chart.hiddenState.properties.radius = am4core.percent(0);
// chart.legend = new am4charts.Legend();
// chart.legend.position = "right";
// // chart.legend.maxHeight = 100;
// chart.legend.width = 100

chart.exporting.menu = new am4core.ExportMenu();
chart.exporting.menu.items = [
{
label:
  "<img width=30 height=30 src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsSAAALEgHS3X78AAACEElEQVRoge2b3U3DMBRGvyLe6Qa1Jb/TDSgTUDagE9ANSDeACSgblAkoG5R3S/YIZYIiSzdSwG1qh9pNHB8pD72OYp34304Hu90OfeKiV7ZZuAdk4dTJwqmThVOnk8KC8Qcr6EhXS/i1qXSXq3Qj6c4JC8ZZ5ae3dCdWSyRZAJgCuLJuAGZSq6UV3YOXsEPGp2IhtSoE40PK79HhuU7SzsKC8TGANV3P1g2nRQPYUl7XHk/mUittRStcWpHDrMwltWo8JPggGN94ys6OycK106LSHQGYW4kBEIwXDWSd2rBrL23a0qfUamulnBjqJ54qT/0ybRrALVXZQVNZeFbpWJS1yIjOpVbrmny9ZNsqbEaAN4e+wlsWbRMuRwIH2Xup1cqKOtC2mZY+JisYn9Bw1YhWCTt2ih8AxlbUkbweDolg/OjEIDSxS3hkRSKTq3TqZOHUycKpE0zYrGkF47WTe5MuGI+yxi4JWcJmG2h8SLqMS61Cbxf9IpgwzYsn+6QrsrULhRAEbcP7pM8pixidVlW6EjuLLGL10hXpxTllEXPHg6QLKyEyeRxOnSycOlm4BnY4KTqNj3xchc1J3og2ys+GYNycSnxLrTZBhWkMfQGw/PPJQTToZS//ezbtcyA+pAzvALxTqcfCzNJuHM+cavH+xoPe9NRKCM/qP1W5JP8FIHWycOpk4dTJwqnTL2EAP5QSu34+E9+tAAAAAElFTkSuQmCC'><img>",
  "menu": [
    {
      "label": "Image",
      "menu": [
        { "type": "png", "label": "PNG" },
        { "type": "jpg", "label": "JPG" },
        { "type": "svg", "label": "SVG" },
        { "type": "pdf", "label": "PDF" }
      ]
    }, {
      "label": "Data",
      "menu": [
        { "type": "json", "label": "JSON" },
        { "type": "csv", "label": "CSV" },
        { "type": "xlsx", "label": "XLSX" },
        { "type": "html", "label": "HTML" },
        { "type": "pdfdata", "label": "PDF" }
      ]
    }, {
      "label": "Print", "type": "print"
    }
  ],
},
];
chart.exporting.filePrefix = 'platformSale'
// "topPlatform" + " " + "week-" + this.filterData.week[0];
chart.exporting.menu.align = "left";
chart.exporting.menu.verticalAlign = "top";

}

  }