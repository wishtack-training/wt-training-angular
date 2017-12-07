/**
 *
 * (c) 2013-2017 Wishtack
 *
 * $Id: $
 */

import { Injectable } from '@angular/core';
import { User } from '../user/user';

@Injectable()
export class UserStore {

    private _history = [];
    private _userList: User[] = [];

    getUserList() {
        return this._userList;
    }

    addUser(user: User) {
        const userList = [...this._userList, user];
        this._updateUserList(userList);
    }

    removeUser(user: User) {
        const userList = this._userList
            .filter(_user => _user !== user);
        this._updateUserList(userList);
    }

    undo() {

        const userList = this._history.pop();

        if (userList == null) {
            throw new Error('Undo history is empty!');
        }

        this._userList = userList;

    }

    updateUser(previousUser: User, newUser: User) {

        const userList = this._userList
            .map(user => {

                if (user === previousUser) {
                    return newUser;
                }

                return user;

            });

        this._updateUserList(userList);

    }

    private _updateUserList(userList) {
        this._history.push(this._userList);
        this._userList = userList;
    }
}
