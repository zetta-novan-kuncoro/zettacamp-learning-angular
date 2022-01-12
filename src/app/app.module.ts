import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ServiceModule } from './services/service.module';
import { TaskManagerModule } from './task-manager/task-manager.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ServiceModule,
    TaskManagerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
