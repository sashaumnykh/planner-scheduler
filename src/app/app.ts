import { Component, signal } from '@angular/core';
import { User } from './models/user';
import { Task } from './models/task';
import { ApiService } from './services/api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [ CommonModule ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('planner-scheduler');

  users = signal<User[]>([]);
  tasks = signal<Task[]>([]);

  constructor(private api: ApiService) {
    this.loadData();
  }

  loadData() {
    this.api.getUsers().subscribe(data => this.users.set(data));
    this.api.getTasks().subscribe(data => this.tasks.set(data));
  }
}
