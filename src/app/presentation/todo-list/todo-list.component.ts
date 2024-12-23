import { Component, OnInit } from '@angular/core';
import { CommonModule } from "@angular/common";
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from "@angular/material/icon";
import { MatButton } from "@angular/material/button";
import { MatListItem } from '@angular/material/list';
import { MatList } from '@angular/material/list';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field'
import { Todo } from '../../models/todo.model';
import { TodoService } from '../../core/services/todo.service';

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
    MatList,
    FormsModule,
    MatFormFieldModule
]
})

export class TodoListComponent implements OnInit {
  todos: Todo[] = [];
  newTodoName: string = '';

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.loadTodo();
  }

  loadTodo(): void{
    this.todoService.getAllTodoTasks().subscribe(
      (data) => {
          this.todos = data;
      }
  )
  }

  addTodo(name: string){
    const newTodo: Todo = {id: 0, name, isDone: false };
        this.todoService.createTodo(newTodo).subscribe(() => {
            this.loadTodo();
            this.newTodoName='';  // clear value
        })

  }

  deleteTodo(id: number) {
    this.todoService.deleteTodo(id).subscribe(() => {
      this.todos = this.todos.filter(todo => todo.id !== id);
  })
  }

}
