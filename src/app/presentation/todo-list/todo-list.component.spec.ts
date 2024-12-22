/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CommonModule } from "@angular/common";
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from "@angular/material/icon";
import { MatButton } from "@angular/material/button";
import { MatListItem } from '@angular/material/list';

import { TodoListComponent } from './todo-list.component';
import { of } from 'rxjs';
import { TodoService } from '../../core/services/todo.service';
import { Todo } from '../../models/todo.model';

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;
  let todoService: jasmine.SpyObj<TodoService>;

  beforeEach(async() => {

    const spy = jasmine.createSpyObj(
      'TodoService',
      ['getAllTodoTasks', 'createTodo', 'deleteTodo']
    );

    // setup mock implementation
    spy.getAllTodoTasks.and.returnValue(of([{ id: 1, name: 'First Todo', isDone: false}]));

    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        MatCardModule,
        MatIconModule,
        MatButton,
        MatListItem,
        TodoListComponent,
      ],
      providers: [
        {provide: TodoService, useValue: spy}
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    todoService = TestBed.inject(TodoService) as jasmine.SpyObj<TodoService>;
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load todos on init', () => {
    expect(component.todos.length).toBe(1);
    expect(component.todos[0].name).toBe('First Todo');
  });



});
