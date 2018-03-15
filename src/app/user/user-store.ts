import { User } from './user';

export class UserStore {

    private _userList = [];
    private _userListHistory = [];

    constructor() {
        // @TODO: Don't do this here. Cf. APP_INITIALIZER.
        const userListString = localStorage.getItem('userList');
        if (userListString != null) {
            this._userList = JSON.parse(userListString);
        }
    }

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

    replaceUser({previousUser, currentUser}: { previousUser: User; currentUser: User }) {

        const userList = this._userList
            .map(user => {

                if (user === previousUser) {
                    return currentUser;
                }

                return user;
            });

        this._updateUserList(userList);

    }

    undo() {

        if (this._userListHistory.length === 0) {
            return;
        }

        this._userList = this._userListHistory.pop();

    }

    private _updateUserList(userList) {
        // @TODO put key in a property and use a localStorage service wrapper.
        localStorage.setItem('userList', JSON.stringify(userList))
        this._userListHistory.push(this._userList);
        this._userList = userList;
    }

}
