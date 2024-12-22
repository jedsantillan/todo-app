import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../../models/todo.model';
import { TodoRepositoryService } from '../../infrastructure/todo-repository.service';

@Injectable({
    providedIn: 'root'
})

export class TodoService {
    constructor(private todoRepo: TodoRepositoryService) {}

    getAllTodoTasks(): Observable<Todo[]> {
        return this.todoRepo.getAllTodoTasks();
    }

    getTodoTask(id: number): Observable<Todo> {
        return this.todoRepo.getTodoTask(id);
    }

    createTodo(todoTask: Todo): Observable<Todo> {
        return this.todoRepo.createTodo(todoTask);
    }

    deleteTodo(id: number): Observable<void> {
        return this.todoRepo.deleteTodo(id);
    }

}
