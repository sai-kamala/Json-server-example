import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsEligibleComponent } from './students-eligible.component';

describe('StudentsEligibleComponent', () => {
  let component: StudentsEligibleComponent;
  let fixture: ComponentFixture<StudentsEligibleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentsEligibleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsEligibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
