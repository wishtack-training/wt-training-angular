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

    removeUser(userToRemove: User) {
        this._userList = this._userList
            .filter(user => user !== userToRemove);
    }

}




