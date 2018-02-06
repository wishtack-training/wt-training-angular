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
        this._userList.push(user);
    }

    removeUser(user: User) {
        const userIndex = this._userList.indexOf(user);
        this._userList.splice(userIndex, 1);
    }

}
