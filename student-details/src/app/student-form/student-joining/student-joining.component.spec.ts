import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentJoiningComponent } from './student-joining.component';

describe('StudentJoiningComponent', () => {
  let component: StudentJoiningComponent;
  let fixture: ComponentFixture<StudentJoiningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentJoiningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentJoiningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
