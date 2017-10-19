import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { UserStore } from '../user-store';
import { User } from '../user';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'wt-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
})
export class UserListComponent {

    userList$: Observable<User[]>;
    editedUser: User;

    constructor(private _userStore: UserStore) {

        this.userList$ = this._userStore.userList$;

    }

    addUser(user) {
        this._userStore.addUser(user);
    }

    removeUser(user) {
        this._userStore.removeUser(user);
    }

    undo() {
        this._userStore.undo();
    }

    editUser(user) {
        this.editedUser = user;
    }

    updateUser(user) {
        this._userStore.replaceUser({
            previous: this.editedUser,
            current: user
        });
        this.editedUser = null;
    }

}
