import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  taskList: {
    id: number;
    taskName: string;
    taskDesc: string;
    showDescription: boolean;
  }[] = [];

}
