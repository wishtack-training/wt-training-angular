import { User } from './user';

export class UserStore {

    private _userList: User[] = [];

    addUser(user: User) {
        this._userList = [...this._userList, user];
    }

    getUserList(): User[] {
        return this._userList;
    }

    removeUser(user: User) {
        this._userList = this._userList.filter(_user => _user !== user);
    }

}