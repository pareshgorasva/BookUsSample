import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewVsReturnComponent } from './new-vs-return.component';

describe('NewVsReturnComponent', () => {
  let component: NewVsReturnComponent;
  let fixture: ComponentFixture<NewVsReturnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewVsReturnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewVsReturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
