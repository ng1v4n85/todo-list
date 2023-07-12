import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class TaskEditService {
        
    id: number;
    taskName: string;
    taskDesc: string;
    showDescription: boolean;
} 