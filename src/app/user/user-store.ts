/**
 *
 * (c) 2013-2017 Wishtack
 *
 * $Id: $
 */

import { Injectable } from '@angular/core';
import { User } from './user';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class UserStore {

    private _userList$ = new BehaviorSubject<User[]>([]);
    private _userListHistory: User[][] = [];

    get userList$() {
        return this._userList$.asObservable();
    }

    addUser(user: User) {
        const userList = [...this._getUserList(), user];
        this._updateUserList(userList);
    }

    removeUser(user: User) {
        const userList = this._getUserList()
            .filter(_user => _user !== user);
        this._updateUserList(userList);
    }

    undo() {

        if (this._userListHistory.length === 0) {
            return;
        }

        this._userList$.next(this._userListHistory.pop());

    }

    _getUserList(): User[] {
        return this._userList$.getValue();
    }

    _updateUserList(userList) {
        this._userListHistory.push(this._getUserList());
        this._userList$.next(userList);
    }

}
