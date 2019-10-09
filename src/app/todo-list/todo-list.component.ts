import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { TodoService } from './todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  constructor(private _todoService: TodoService) {}

  ngOnInit() {
    this._todoService.getTodoList().subscribe(console.log);
  }
}

@NgModule({
  declarations: [TodoListComponent],
  imports: [CommonModule],
  exports: [TodoListComponent]
})
export class TodoListModule {}
