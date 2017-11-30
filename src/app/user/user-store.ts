/**
 *
 * (c) 2013-2017 Wishtack
 *
 * $Id: $
 */
import { User } from './user';

export class UserStore {

    private _userList: User[] = [];
    private _userListHistory = [];

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
        this._userList = this._userListHistory.pop();
    }

    updateUser(user: User, newUser: User) {
        const userList = this._userList
            .map(_user => {

                if (_user === user) {
                    return newUser;
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
