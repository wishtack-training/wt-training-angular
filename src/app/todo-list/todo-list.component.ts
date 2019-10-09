import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todoList$ = this._todoService.getTodoList();

  constructor(private _todoService: TodoService) {}

  ngOnInit() {}
}

@NgModule({
  declarations: [TodoListComponent],
  imports: [CommonModule],
  exports: [TodoListComponent]
})
export class TodoListModule {}
