import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TodoItem } from '../shared/models/todo-item.model';

@Component({
  selector: 'app-todo-item-create',
  templateUrl: './todo-item-create.component.html',
  styleUrls: ['./todo-item-create.component.scss']
})
export class TodoItemCreateComponent implements OnInit {

  constructor() { }

  @Output() itemCreated = new EventEmitter<TodoItem>();

  item: TodoItem;
  newActionPointName: string;

  ngOnInit() {
    this.item = {
      id: new Date().getSeconds(),
      name: '',
      actionPoints: []
    };
  }

  createActionPoint() {
    if (this.newActionPointName) {
      this.item.actionPoints.push({name: this.newActionPointName, done: false});
      this.newActionPointName = '';
    }
  }

  create() {
    this.itemCreated.emit(this.item);
    this.item = {
      id: new Date().getSeconds(),
      name: '',
      actionPoints: []
    };
  }

}
