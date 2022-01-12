import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-done-list',
  templateUrl: './task-done-list.component.html',
  styleUrls: ['./task-done-list.component.scss']
})
export class TaskDoneListComponent {
  @Input() tasksDone: Task[] = []
  @Output() delete = new EventEmitter<Task>()
}
