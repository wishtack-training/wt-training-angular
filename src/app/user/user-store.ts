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

    replaceUser(previousUser: User, newUser: User) {

        this._userList = this._userList
            .map(_user => {

                if (_user === previousUser) {
                    return newUser;
                }

                return _user;

            });

    }
}
