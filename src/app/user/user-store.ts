import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable()
export class UserStore {

    private _userList: User[] = [];

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

    replaceUser({previousUser, currentUser}:
                    {
                        previousUser: User;
                        currentUser: User
                    }) {

        this._userList = this._userList
            .map(user => {

                if (user === previousUser) {
                    return currentUser;
                }

                return user;

            });

    }

}
