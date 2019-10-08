import { Injectable } from '@angular/core';
import { UserStore } from './user.store';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private _userStore: UserStore) {}
}
