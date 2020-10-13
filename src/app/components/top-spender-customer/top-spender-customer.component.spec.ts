import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopSpenderCustomerComponent } from './top-spender-customer.component';

describe('TopSpenderCustomerComponent', () => {
  let component: TopSpenderCustomerComponent;
  let fixture: ComponentFixture<TopSpenderCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopSpenderCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopSpenderCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
