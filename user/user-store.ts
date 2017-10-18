/**
 *
 * (c) 2013-2017 Wishtack
 *
 * $Id: $
 */

import { User } from './user';

export class UserStore {

    private _userList: User[] = [];
    private _userListHistory: User[][] = [];

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

        if (this._userListHistory.length === 0) {
            return;
        }

        this._userList = this._userListHistory.pop();

    }

    _updateUserList(userList) {
        this._userListHistory.push(this._userList);
        this._userList = userList;
    }

}
