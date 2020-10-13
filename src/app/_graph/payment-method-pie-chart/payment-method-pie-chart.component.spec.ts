import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentMethodPieChartComponent } from './payment-method-pie-chart.component';

describe('PaymentMethodPieChartComponent', () => {
  let component: PaymentMethodPieChartComponent;
  let fixture: ComponentFixture<PaymentMethodPieChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentMethodPieChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentMethodPieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
