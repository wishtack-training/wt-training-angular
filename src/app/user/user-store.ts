/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */

import { User } from './user';

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

    replaceUser(previousUser: User, user: User) {
        this._userList = this._userList
            .map(_user => {

                if (_user === previousUser) {
                    return user;
                }

                return _user;

            });
    }

}
