import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../../reducers';
import { User } from '../user';
import { UserStore } from '../user-store';

@Component({
    selector: 'wt-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

    editedUser: User;
    userList: User[];

    constructor(private _userStore: UserStore,
                private _store: Store<AppState>) {
    }

    ngOnInit() {

        this._store
            .subscribe(state => {
                this.userList = state.users.userList;
            });

    }

    addUser(user: User) {
        this._store
            .dispatch({
                type: 'wt/user/add',
                user: user
            });
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
