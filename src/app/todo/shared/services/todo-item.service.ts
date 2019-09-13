import { Injectable } from '@angular/core';
import { TodoItem } from '../models/todo-item.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoItemService {

  private items: TodoItem[];

  constructor() { 
    this.items = [];
  }

  add(item: TodoItem) {
    this.items.push(item)
  }

  getAll(): Observable<TodoItem[]> {
    return of(this.items);
  }
}
