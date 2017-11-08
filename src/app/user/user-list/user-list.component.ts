import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { UserStore } from '../user-store';
import { User } from '../user';
import 'rxjs/add/operator/debounceTime';

@Component({
    selector: 'wt-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
})
export class UserListComponent {

    userForm: FormGroup;

    private _userStore = new UserStore();

    constructor() {

        this.userForm = new FormGroup({
            firstName: new FormControl(null, [
                Validators.required
            ]),
            lastName: new FormControl()
        });

    }

    addUser() {
        const user = new User(this.userForm.value);
        this._userStore.addUser(user);
        this.userForm.reset();
    }

    getUserList() {
        return this._userStore.getUserList();
    }

}
