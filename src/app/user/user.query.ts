import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { UserState, UserStore } from './user.store';

@Injectable({
  providedIn: 'root'
})
export class UserQuery extends Query<UserState> {
  email$ = this.select('email');
  constructor(protected store: UserStore) {
    super(store);
  }
}
