import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyMultiComponent } from './study-multi.component';

describe('StudyMultiComponent', () => {
  let component: StudyMultiComponent;
  let fixture: ComponentFixture<StudyMultiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudyMultiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudyMultiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
