import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface UserState {
  email: string;
  token: string;
}

export function createInitialState(): UserState {
  return {
    email: null,
    token: null
  };
}

@Injectable({
  providedIn: 'root'
})
@StoreConfig({
  name: 'user',
  resettable: true
})
export class UserStore extends Store<UserState> {
  constructor() {
    super(createInitialState());
  }
}
