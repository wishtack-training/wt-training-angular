/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */
import { User } from './user';

export class UserStore {

    private _nextUserId = 0;
    private _userList = [];

    addUser(user: User): Promise<User> {

        user = new User({
            ...user,
            id: (this._nextUserId++).toString()
        });

        this._userList = [
            ...this._userList,
            user
        ];

        return Promise.resolve(user);

    }

    getUserList() {
        return this._userList;
    }

    getUser(userId: string) {
        return this._userList.find(user => user.id === userId);
    }

    removeUser(userId: string) {
        this._userList = this._userList.filter(user => user.id !== userId);
    }

}
