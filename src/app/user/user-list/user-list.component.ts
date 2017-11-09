import { Component } from '@angular/core';

import { UserStore } from '../user-store';
import { User } from '../user';
import { UserFormConfig } from '../user-form/user-form.component';

@Component({
    selector: 'wt-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
})
export class UserListComponent {

    formConfig: UserFormConfig = {
        buttonLabel: 'SEARCH',
        checkBlabla: true,
        validationEnabled: false
    };

    constructor(private _userStore: UserStore) {
    }

    addUser(user) {
        this._userStore.addUser(user);
    }

    getUserList() {
        return this._userStore.getUserList();
    }

    undo() {
        this._userStore.undo();
    }

}
