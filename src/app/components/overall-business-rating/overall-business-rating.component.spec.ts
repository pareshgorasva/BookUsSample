import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverallBusinessRatingComponent } from './overall-business-rating.component';

describe('OverallBusinessRatingComponent', () => {
  let component: OverallBusinessRatingComponent;
  let fixture: ComponentFixture<OverallBusinessRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverallBusinessRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverallBusinessRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
