import { Observable } from "rxjs";
import { Todo } from "../../models/todo.model";

export interface TodoRepositoryInterface {
    getAllTodoTasks(): Observable<Todo[]>;  // Retrieves all todos
    getTodoTask(id: number): Observable<Todo>;  // Retrieves todo by id
    createTodo(todoTask: Todo): Observable<Todo>; // Creates a todo task
    deleteTodo(id: number): Observable<void>; // Deletes todo task
}