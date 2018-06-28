/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */
import { User } from './user';

export class UserStore {

    private _userList: User[] = [];

    addUser(user: User) {
        this._userList = [...this._userList, user];
    }

    getUserList() {
        return this._userList;
    }

    removeUser(user: User) {
        this._userList = this._userList
            .filter(_user => _user !== user);
    }

    replaceUser(previousUser: User, updatedUser: User) {

        this._userList = this._userList
            .map(user => {

                if (user === previousUser) {
                    return updatedUser;
                }

                return user;

            });

    }
}




