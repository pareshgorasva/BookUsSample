import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesPieChartComponent } from './services-pie-chart.component';

describe('ServicesPieChartComponent', () => {
  let component: ServicesPieChartComponent;
  let fixture: ComponentFixture<ServicesPieChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicesPieChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicesPieChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
