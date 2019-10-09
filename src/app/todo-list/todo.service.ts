import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserQuery } from '../user/user.query';

export interface Todo {
  id: string;
  title: string;
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  constructor(private _httpClient: HttpClient, private _userQuery: UserQuery) {}

  getTodoList() {
    return this._httpClient.get<Todo[]>('https://todos.yjaaidi.now.sh/todos');
  }
}
