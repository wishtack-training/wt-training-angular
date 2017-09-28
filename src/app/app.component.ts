import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { User } from './user/user';
import { UserStore } from './user/user-store';
import 'rxjs/add/operator/debounceTime';

@Component({
    selector: 'wt-app',
    templateUrl: './app.component.html',
    styleUrls: [
        './app.component.css'
    ]
})
export class AppComponent {

    form: FormGroup;

    _userStore: UserStore;

    constructor() {

        this.form = new FormGroup(
            {
                firstName: new FormControl(
                    null,
                    Validators.required
                ),
                lastName: new FormControl(null)
            }
        );

        this._userStore = new UserStore();

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
