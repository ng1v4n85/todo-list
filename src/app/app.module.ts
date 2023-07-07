import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskListItemComponent } from './task-list/task-list-item/task-list-item.component';
import { TaskService } from './task.service';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { TaskEditService } from './task-edit.service';

const routes: Routes = [
  { path: '', component: TaskListComponent },
  { path: 'edit/:taskId', component: TaskListItemComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskListItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [TaskService, TaskEditService],
  bootstrap: [AppComponent]
})
export class AppModule { }
