import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-in-progress-list',
  templateUrl: './task-in-progress-list.component.html',
  styleUrls: ['./task-in-progress-list.component.scss']
})
export class TaskInProgressListComponent {
  @Input() tasksInProgress: Task[] = []
  @Output() markTaskDone = new EventEmitter<Task>()
}
