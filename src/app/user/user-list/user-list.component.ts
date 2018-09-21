import { Component } from '@angular/core';
import { User } from '../user';
import { UserStore } from '../user-store.service';

@Component({
    selector: 'wt-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {

    constructor(
        private _userStore: UserStore
    ) {
    }

    addUser(user: User) {
        this._userStore.addUser(user);
    }

    getUserList() {
        return this._userStore.getUserList();
    }

    removeUser(user: User) {
        this._userStore.removeUser(user);
    }
}
