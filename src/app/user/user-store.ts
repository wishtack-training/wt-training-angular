/**
 *
 * (c) 2013-2017 Wishtack
 *
 * $Id: $
 */

import { Injectable } from '@angular/core';

import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserStore {

    private _history: User[][] = [];
    private _userList: User[] = [];

    constructor(private _httpClient: HttpClient) {
    }

    getUserList(): Observable<User[]> {

        return this._httpClient.get<any[]>('https://wt-users.getsandbox.com/users')
            .map(userDataList => {
                return userDataList.map(userData => new User(userData));
            });

    }

    addUser(user: User) {

        return this._httpClient.post('https://wt-users.getsandbox.com/users', user);

    }

    replaceUser(previousUser: User, newUser: User) {

        const userList = this._userList
            .map(_user => {

                if (_user === previousUser) {
                    return newUser;
                }

                return _user;

            });

        this._updateUserList(userList);

    }

    removeUser(user: User) {
        const userList = this._userList
            .filter(_user => _user !== user);
        this._updateUserList(userList);
    }

    undo() {

        if (this._history.length === 0) {
            return;
        }

        this._userList = this._history.pop();

    }

    private _updateUserList(userList: User[]) {
        this._history.push(this._userList);
        this._userList = userList;
    }
}
