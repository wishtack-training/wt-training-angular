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
        this._userList = this._userList.filter(_user => _user !== user);
    }

    replaceUser(oldUser: User, newUser: User) {

        this._userList = this._userList
            .map(user => {

                if (user === oldUser) {
                    return newUser;
                }

                return user;

            });

    }

}
