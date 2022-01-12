import { Injectable } from '@angular/core';

import { Task, tasks } from 'src/data/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks: Task[] = [...tasks]

  constructor() { }

  getTaskToDo(): Task[] {
    return this.tasks.filter(task => task.status === 'TODO')
  }

  getTaskInProgress(): Task[] {
    return this.tasks.filter(task => task.status === 'IN PROGRESS')
  }

  getTaskDone(): Task[] {
    return this.tasks.filter(task => task.status === 'DONE')
  }

  addTask(task: Task): void {
    this.tasks.push(task)
    console.log(this.tasks)
  }

  markTaskInProgress(task: Task) {
    const position = this.tasks.indexOf(task)
    this.tasks[position].status = 'IN PROGRESS'
  }

  markTaskDone(task: Task) {
    const position = this.tasks.indexOf(task)
    this.tasks[position].status = 'DONE'
  }

  deleteTask(task: Task) {
    const position = this.tasks.indexOf(task)
    this.tasks.splice(position, 1)
  }
}
