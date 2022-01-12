import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskManagerComponent } from './task-manager.component';
import { TaskCreateComponent } from './task-create/task-create.component';
import { FormsModule } from '@angular/forms';
import { TaskToDoListComponent } from './task-to-do-list/task-to-do-list.component';
import { TaskInProgressListComponent } from './task-in-progress-list/task-in-progress-list.component';
import { TaskDoneListComponent } from './task-done-list/task-done-list.component';



@NgModule({
  declarations: [
    TaskManagerComponent,
    TaskCreateComponent,
    TaskToDoListComponent,
    TaskInProgressListComponent,
    TaskDoneListComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    TaskManagerComponent
  ]
})
export class TaskManagerModule { }
