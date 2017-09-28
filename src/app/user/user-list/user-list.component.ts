/**
 *
 * (c) 2013-2017 Wishtack
 *
 * $Id: $
 */

import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../user';
import { UserStore } from '../user-store';

@Component({
    selector: 'wt-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: [
        './user-list.component.css'
    ]
})
export class UserListComponent {


    form: FormGroup;

    constructor(private _userStore: UserStore) {

        this.form = new FormGroup(
            {
                firstName: new FormControl(
                    null,
                    Validators.required
                ),
                lastName: new FormControl(null)
            }
        );

        this._userStore.addUser(new User({
            firstName: 'Foo',
            lastName: 'BAR'
        }));

        this._userStore.addUser(new User({
            firstName: 'John',
            lastName: 'DOE'
        }));

    }

    addUser(form: FormGroup) {
        const user = new User(form.value);
        this._userStore.addUser(user);
        form.reset();
    }

    getUserList() {
        return this._userStore.getUserList();
    }


    getPictureUrl(user: User) {

        const userName = encodeURIComponent(user.firstName);

        return `https://robohash.org/${userName}`;

    }

    getControlList() {
        return Object.values(this.form.controls);
    }
}
