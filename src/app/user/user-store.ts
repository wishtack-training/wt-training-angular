/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable()
export class UserStore {

    private _userList = [];

    getUserList() {
        return this._userList;
    }

    addUser(user: User) {
        this._userList = [...this._userList, user];
    }

    removeUser(user: User) {
        this._userList = this._userList
            .filter(_user => _user !== user);
    }

    updateUser(previousUser: User, newUser: User) {

        this._userList = this._userList
            .map(user => {

                if (user === previousUser) {
                    return newUser;
                }

                return user;
            });

    }
}
