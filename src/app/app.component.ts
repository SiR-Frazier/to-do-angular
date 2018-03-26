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

  tasks: Task[] = [
    new Task('Finish angular hw'),
    new Task('Javascript brainstorm'),
    new Task('Add readme')

  ];


}

export class Task {
  public done: boolean = false;
  constructor(public description: string) { }
}
