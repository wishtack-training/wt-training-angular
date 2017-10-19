import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { UserStore } from '../user-store';
import { User } from '../user';
import { fieldsDontMatch, startsWithA } from '../user-validators';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/bufferTime';
import 'rxjs/add/operator/filter';

@Component({
    selector: 'wt-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

    _userStore: UserStore;

    form: FormGroup;

    constructor() {

        this._userStore = new UserStore();

        this.form = new FormGroup(
            {
                firstName: new FormControl(
                    null,
                    [
                        startsWithA
                    ]
                ),
                lastName: new FormControl()
            },
            fieldsDontMatch('firstName', 'lastName')
        );

        const rawValue = localStorage.getItem('formValue');

        if (rawValue != null) {
            this.form.reset(JSON.parse(rawValue));
        }

        this.form.valueChanges
            .subscribe(
                (value) => {
                    localStorage.setItem('formValue', JSON.stringify(value))
                }
            );

    }

    ngOnInit() {
    }

    addUser() {

        const user = new User(this.form.value);

        this._userStore.addUser(user);

        this.form.reset();

    }

    removeUser(user) {
        this._userStore.removeUser(user);
    }

    getUserList() {
        return this._userStore.getUserList();
    }

    undo() {
        this._userStore.undo();
    }

}
