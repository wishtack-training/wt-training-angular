/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */
import { User } from './user';

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

    updateUser(user: User, newUser: User) {

        this._userList = this._userList
            .map(_user => {

                if (user === _user) {
                    return newUser;
                }

                return _user;

            });

    }
}
