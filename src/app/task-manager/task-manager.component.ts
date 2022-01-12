import { Component } from '@angular/core';
import { Task } from 'src/data/task';

@Component({
  selector: 'app-task-manager',
  templateUrl: './task-manager.component.html',
  styleUrls: ['./task-manager.component.scss'],
})
export class TaskManagerComponent {
  todo: Task[] = []
  inProgress: Task[] = []
  done: Task[] = []

  onNewTask(event: string): void {
    this.todo.push({
      id: Math.floor(Math.random() * 2000000),
      title: event,
      status: 'TODO'
    })
  }

  onTaskMarkInProgress(event: Task): void {
    const position = this.todo.indexOf(event)
    this.todo.splice(position, 1)
    this.inProgress.push({ ...event, status: 'IN PROGRESS' })
  }

  onTaskMarkDone(event: Task): void {
    const position = this.inProgress.indexOf(event)
    this.inProgress.splice(position, 1)
    this.done.push({ ...event, status: 'DONE' })
  }

  onTaskDelete(event: Task): void {
    const position = this.done.indexOf(event)
    this.done.splice(position, 1)
  }
}
