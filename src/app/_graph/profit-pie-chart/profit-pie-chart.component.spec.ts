import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfitPieChartComponent } from './profit-pie-chart.component';

describe('ProfitPieChartComponent', () => {
  let component: ProfitPieChartComponent;
  let fixture: ComponentFixture<ProfitPieChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfitPieChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfitPieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
