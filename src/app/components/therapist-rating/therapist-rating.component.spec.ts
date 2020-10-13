import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TherapistRatingComponent } from './therapist-rating.component';

describe('TherapistRatingComponent', () => {
  let component: TherapistRatingComponent;
  let fixture: ComponentFixture<TherapistRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TherapistRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TherapistRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
