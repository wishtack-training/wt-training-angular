/**
 *
 * (c) 2013-2017 Wishtack
 *
 * $Id: $
 */

import { User } from './user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserStore {

    private _index = 0;
    private _userListHistory = [];
    private _userList: User[] = [];

    constructor(private _httpClient: HttpClient) {
    }

    getUserList() {
        return this._userList;
    }

    addUser(user: User) {

        user = new User(user);
        user.id = (this._index++).toString();

        const userList = [...this._userList, user];
        this._updateUserList(userList);
    }

    removeUser(user: User) {
        const userList = this._userList
            .filter(_user => _user !== user);
        this._updateUserList(userList);
    }

    undo() {

        if (this._userListHistory.length === 0) {
            return;
        }

        this._userList = this._userListHistory.pop();

    }

    getUserById(userId) {
        return this._httpClient
            .get(`https://wt-users.getsandbox.com/users/${userId}`)
            .map(data => new User(data));
    }

    private _updateUserList(userList) {
        this._userListHistory.push(this._userList);
        this._userList = userList;
    }

}
