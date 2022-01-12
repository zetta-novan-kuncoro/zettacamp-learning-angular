import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskInProgressListComponent } from './task-in-progress-list.component';

describe('TaskInProgressListComponent', () => {
  let component: TaskInProgressListComponent;
  let fixture: ComponentFixture<TaskInProgressListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskInProgressListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskInProgressListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
