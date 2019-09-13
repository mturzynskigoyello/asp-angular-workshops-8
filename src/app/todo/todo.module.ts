import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { MatListModule, MatCardModule, MatSlideToggleModule, MatFormFieldModule, MatButtonModule, MatInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { TodoItemCreateComponent } from './todo-item-create/todo-item-create.component';


@NgModule({
  declarations: [TodoItemComponent, TodoListComponent, TodoItemCreateComponent],
  imports: [
    CommonModule,
    TodoRoutingModule,
    MatListModule,
    MatCardModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatInputModule,
    FormsModule
  ]
})
export class TodoModule { }
