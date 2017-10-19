import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { UserStore } from '../user-store';
import { User } from '../user';

@Component({
    selector: 'wt-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

    form: FormGroup;
    userList: User[];

    constructor(private _userStore: UserStore) {

        this.form = new FormGroup(
            {
                firstName: new FormControl(),
                lastName: new FormControl()
            }
        );
    }

    ngOnInit() {
    }

    addUser() {

        const user = new User(this.form.value);

        this._userStore.addUser(user);
        this.form.reset();

        this._retrieveUserList();

    }

    removeUser(user) {

        this._userStore.removeUser(user);

        this._retrieveUserList();

    }

    undo() {

        this._userStore.undo();

        this._retrieveUserList();

    }

    private _retrieveUserList() {
        this.userList = this._userStore.getUserList();
    }
}
