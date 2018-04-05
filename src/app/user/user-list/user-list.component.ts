import { Component } from '@angular/core';
import { User } from '../user';
import { UserStore } from '../user-store';

@Component({
    selector: 'wt-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
})
export class UserListComponent {

    editedUser: User;

    private _userStore: UserStore;
    
    constructor(userStore: UserStore) {
        this._userStore = userStore;
    }

    addUser(user: User) {
        this._userStore.addUser(user);
    }

    getUserList() {
        return this._userStore.getUserList();
    }

    removeUser(user: User) {
        this._userStore.removeUser(user);
    }

    editUser(user: User) {
        this.editedUser = user;
    }

    updateUser(user: User) {

        this.replaceUser(this.editedUser, user);
        this.editedUser = null;

    }

    replaceUser(previousUser, currentUser) {

        this._userStore.replaceUser({
            previousUser,
            currentUser
        });

    }

    trackByIndex(index) {
        return index;
    }

}
