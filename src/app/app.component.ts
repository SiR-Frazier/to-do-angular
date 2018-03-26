import { Component } from '@angular/core';
import { Task } from './models/task.model';

@Component({
  selector: 'test-app-selector',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  currentFocus: string = 'Angular Homework';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() +1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();



  editTask(clickedTask) {
    alert("You want to edit a task?");
    this.selectedTask = clickedTask;
  }
  tasks: Task[] = [
    new Task('Finish angular hw', 3),
    new Task('Javascript brainstorm', 2),
    new Task('Add readme', 2)

  ];

  selectedTask: Task = this.tasks[0];

  priorityColor(currentTask){
    if(currentTask.priority === 3){
      return "bg-danger";
    } else if (currentTask.priority === 2) {
      return "bg-warning";
    } else {
      return "bg-info";
      }
    }
}

export class Task {
  public done: boolean = false;
  constructor(public description: string, public priorityColor: number) { }
}
