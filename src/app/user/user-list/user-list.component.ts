import { Component, OnInit } from '@angular/core';
import { UserStore } from '../user-store';
import { User } from '../user';

@Component({
    selector: 'wt-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

    editedUser = null;

    private _userStore = new UserStore();

    constructor() {
    }

    ngOnInit() {
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

    replaceUser(previousUser: User, newUser: User) {
        this._userStore.replaceUser(previousUser, newUser);
        this.editedUser = null;
    }

}
