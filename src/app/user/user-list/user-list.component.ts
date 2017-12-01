import { Component } from '@angular/core';
import { UserStore } from '../../user-core/user-store';
import { User } from '../user';


@Component({
    selector: 'wt-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {

    editedUser: User;

    constructor(private _userStore: UserStore) {

    }

    addUser(user) {
        this._userStore.addUser(user);
    }

    getUserList() {
        return this._userStore.getUserList();
    }

    editUser(user: User) {
        this.editedUser = user;
    }

    removeUser(user) {
        this._userStore.removeUser(user);
    }

    updateUser(oldUser, newUser) {
        this._userStore.updateUser(oldUser, newUser);
        this.editedUser = null;
    }

}
