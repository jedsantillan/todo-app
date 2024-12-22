import { Component, OnInit } from '@angular/core';
import { CommonModule } from "@angular/common";
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from "@angular/material/icon";
import { MatButton } from "@angular/material/button";
import { MatListItem } from '@angular/material/list';
import { MatFormField } from '@angular/material/form-field';
import { MatCheckbox } from '@angular/material/checkbox';
import { Todo } from '../../models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButton,
    MatListItem,
    MatFormField,
    MatCheckbox,
]
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [];

  constructor() { }

  ngOnInit() {
    this.loadTodo();
  }

  loadTodo(){
    this.todos.push({id: 1, name: 'initial todo item', isDone: false })
  }

  addTodo(name: string){

  }

  deleteTodo(id: number) {

  }

}
