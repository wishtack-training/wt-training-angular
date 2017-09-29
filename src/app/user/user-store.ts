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
    _userId = 0;

    constructor() {
        this._userList = [];
        this.addUser(
            new User({
                firstName: 'Foo',
                lastName: 'BAR'
            })
        );
    }

    getUserList() {
        return this._userList;
    }

    addUser(user: User) {

        user = new User(user);
        user.id = (this._userId++).toString();

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

    getUserById(userId: string) {
        return this._userList.find(user => user.id === userId);
    }

    updateUser(user: User) {
        const userList = this._userList
            .map(_user => {

                if (_user.id === user.id) {
                    return user;
                }

                return _user;

            });
        this._updateUserList(userList);
    }

    private _updateUserList(userList: User[]) {
        this._userListHistory.push(this._userList);
        this._userList = userList;
    }
}