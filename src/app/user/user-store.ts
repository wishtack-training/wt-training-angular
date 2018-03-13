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

}
