import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Todo } from "../models/todo.model";
import { TodoRepositoryInterface } from "../core/interfaces/todo-repository.interface";
import { environment } from "../environments/environment";

@Injectable({
    providedIn: 'root'
})

export class TodoRepositoryService implements TodoRepositoryInterface {

    private apiUrl = environment.apiUrl + '/todoTask';

    constructor(private http: HttpClient) {}

    getAllTodoTasks(): Observable<Todo[]> {
        return this.http.get<Todo[]>(this.apiUrl);
    }

    getTodoTask(id: number): Observable<Todo> {
        return this.http.get<Todo>(this.apiUrl + `/${id}`);
    }

    createTodo(todoTask: Todo): Observable<Todo> {
        return this.http.post<Todo>(this.apiUrl, todoTask);
    }

    deleteTodo(id: number): Observable<void> {
        return this.http.delete<void>(this.apiUrl + `/${id}`);
    }

}