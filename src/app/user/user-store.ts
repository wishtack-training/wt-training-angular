/**
 *
 * (c) 2013-2017 Wishtack
 *
 * $Id: $
 */


import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable()
export class UserStore {

    _userList: User[];
    _userListHistory = [];

    constructor() {
        this._userList = [];
    }

    getUserList() {
        console.log('GET USER LIST');
        return this._userList;
    }

    addUser(user: User) {
        this._updateUserList([...this._userList, user]);
    }

    removeUser(user: User) {

        const userList = this._userList
            .filter(_user => _user !== user);

        this._updateUserList(userList);

    }

    undo() {
        this._userList = this._userListHistory.pop();
    }

    private _updateUserList(userList: User[]) {
        this._userListHistory.push(this._userList);
        this._userList = userList;
    }

}