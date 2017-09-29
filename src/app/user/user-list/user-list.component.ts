/**
 *
 * (c) 2013-2017 Wishtack
 *
 * $Id: $
 */

import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { User } from '../user';
import { UserStore } from '../user-store';

@Component({
    selector: 'wt-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: [
        './user-list.component.css'
    ]
})
export class UserListComponent implements OnInit {

    editedUser: User;

    constructor(private _userStore: UserStore) {
    }

    ngOnInit() {

        this._userStore.addUser(new User({
            firstName: 'Foo',
            lastName: 'BAR'
        }));

        this._userStore.addUser(new User({
            firstName: 'John',
            lastName: 'DOE'
        }));

    }

    addUser(user: User) {
        this._userStore.addUser(user);
    }

    removeUser(user: User) {
        this._userStore.removeUser(user);
    }

    getUserList() {
        return this._userStore.getUserList();
    }

    undo() {
        this._userStore.undo();
    }

    editUser(user: User) {
        this.editedUser = user;
    }

    updateUser(user: User) {
        this._userStore.removeUser(this.editedUser);
        this._userStore.addUser(user);
        this.editedUser = null;
    }

}
