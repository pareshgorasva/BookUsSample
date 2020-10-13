import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsPieChartComponent } from './products-pie-chart.component';

describe('ProductsPieChartComponent', () => {
  let component: ProductsPieChartComponent;
  let fixture: ComponentFixture<ProductsPieChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsPieChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsPieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
