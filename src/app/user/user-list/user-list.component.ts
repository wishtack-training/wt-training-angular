import { Component, OnInit } from '@angular/core';
import { UserStore } from '../user-store';
import { User } from '../user';
import { UserConfig } from '../user-config';

@Component({
    selector: 'wt-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

    editedUser: User;

    constructor(public userConfig: UserConfig,
                private _userStore: UserStore) {
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

    updateUser(user: User) {
        this._userStore.updateUser(this.editedUser, user);
        this.editedUser = null;
    }

    shouldShowActions(user: User) {

        if (!this.userConfig.isInlineEdit) {
            return true;
        }

        if (user !== this.editedUser) {
            return true;
        }

        return false;

    }

}
