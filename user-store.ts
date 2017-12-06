import { User } from './user';

/**
 *
 * (c) 2013-2017 Wishtack
 *
 * $Id: $
 */

export class UserStore {

    private _userList: User[] = [];

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

}
