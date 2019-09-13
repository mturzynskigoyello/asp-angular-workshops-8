import { Component, OnInit, Input } from '@angular/core';
import { TodoItem } from '../shared/models/todo-item.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  constructor() { }

  @Input() item: TodoItem;

  ngOnInit() {
  }

}
