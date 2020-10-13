import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerGenderComponent } from './customer-gender.component';

describe('CustomerGenderComponent', () => {
  let component: CustomerGenderComponent;
  let fixture: ComponentFixture<CustomerGenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerGenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerGenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
