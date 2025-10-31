import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Task } from "../models/task";
import { User } from "../models/user";

@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('/assets/mock-data/users.json');
  }

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>('/assets/mock-data/tasks.json');
  }
}