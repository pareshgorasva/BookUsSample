import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopTherapistComponent } from './top-therapist.component';

describe('TopTherapistComponent', () => {
  let component: TopTherapistComponent;
  let fixture: ComponentFixture<TopTherapistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopTherapistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopTherapistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
