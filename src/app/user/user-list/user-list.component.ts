import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserStore } from '../user-store';

@Component({
    selector: 'wt-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: [
        './user-list.component.scss'
    ]
})
export class UserListComponent implements OnInit {

    editedUser: User;

    constructor(private _userStore: UserStore) {
    }

    ngOnInit() {
    }

    addUser(user: User) {
        this._userStore.addUser(user);
    }

    getUserList() {
        return this._userStore.getUserList();
    }

    removeUser(user) {
        this._userStore.removeUser(user);
    }

    editUser(user: User) {
        this.editedUser = user;
    }

    updateEditedUser(user: User) {
        this._userStore.replaceUser(this.editedUser, user);
        this.editedUser = null;
    }
}
