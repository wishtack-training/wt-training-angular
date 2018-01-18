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
