import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { UserStore } from '../user-store';
import { User } from '../user';

@Component({
    selector: 'wt-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
})
export class UserListComponent {

    editedUser: User;

    constructor(private _userStore: UserStore) {
    }

    getUserList() {
        return this._userStore.getUserList();
    }

    addUser(user: User) {
        this._userStore.addUser(user);
    }

    removeUser(user) {
        this._userStore.removeUser(user);
    }

    cloneUser(user: User) {
        this.addUser(new User(user));
    }

    editUser(user: User) {
        this.editedUser = user;
    }

    replaceUser(previousUser: User, newUser: User) {
        this._userStore.replaceUser(previousUser, newUser);
        this.editedUser = null;
    }

    undo() {
        this._userStore.undo();
    }
}
