import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../shared/models/todo-item.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  private items: TodoItem[];
  private selectedItem: TodoItem;
  
  constructor() { 
  }

  ngOnInit() {
    this.items = [{
        id: 1,
        name: "Ugotować obiad",
        actionPoints: [{
          name: "ugotować ziemniaki",
          done: true,
        }, {
          name: "ubić schabowego",
          done: false
        }]
    },
    {
      id: 2,
      name: "Zrobić appkę",
      actionPoints: [{
        name: "napisać coś",
        done: true,
      }, {
        name: "deploy na proda",
        done: false
      },
      {
        name: "testujemy",
        done: false
      }]
    }];
  }

  selectItem(item: TodoItem) {
    if (this.selectedItem == item) {
      this.selectedItem = null;
    } else {
      this.selectedItem = item;
    }
  }

  onItemCreated(item: TodoItem) {
    this.items.push(item);
  }

}
