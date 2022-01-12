import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from 'src/data/task';

@Component({
  selector: 'app-task-to-do-list',
  templateUrl: './task-to-do-list.component.html',
  styleUrls: ['./task-to-do-list.component.scss']
})
export class TaskToDoListComponent {
  @Input() tasksToDo: Task[] = []
  @Output() markTaskInProgress = new EventEmitter<Task>()
}
