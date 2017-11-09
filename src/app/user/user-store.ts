/**
 *
 * (c) 2013-2017 Wishtack
 *
 * $Id: $
 */
import { User } from './user';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserStore {

    private _history = [];

    private _userList$ = new BehaviorSubject([]);

    get userList$(): Observable<User[]> {
        return this._userList$.asObservable();
    }

    addUser(user: User) {
        const userList = [...this._userList$.getValue(), user];
        this._updateUserList(userList);
    }

    removeUser(user: User) {
        const userList = this._userList$
            .getValue()
            .filter(_user => _user !== user);
        this._updateUserList(userList);
    }

    updateUser(oldUser: User, newUser: User) {

        const userList = this._userList$
            .getValue()
            .map(_user => {

                if (_user === oldUser) {
                    return newUser;
                }

                return _user;

            });
        this._updateUserList(userList);

    }

    undo() {

        if (this._history.length === 0) {
            return;
        }

        const userList = this._history.pop();

        this._userList$.next(userList);

    }

    private _updateUserList(userList) {
        this._history.push(this._userList$.getValue());
        this._userList$.next(userList);
    }

}
