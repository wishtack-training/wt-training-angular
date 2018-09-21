import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
    providedIn: 'root'
})
export class UserStore {

    private _userList: User[] = [];

    addUser(user: User) {
        this._userList = [...this._userList, user];
    }

    getUserList() {
        return this._userList;
    }

    removeUser(user: User) {
        this._userList = this._userList.filter(_user => _user !== user);
    }

}
