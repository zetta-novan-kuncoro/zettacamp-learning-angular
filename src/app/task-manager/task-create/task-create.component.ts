import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: 'app-task-create',
  templateUrl: './task-create.component.html',
})
export class TaskCreateComponent {
  @Output() newTask = new EventEmitter<string>()
  newTodo: string = ''
}
