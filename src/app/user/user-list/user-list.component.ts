import { Component } from '@angular/core';
import { UserStore } from '../user-store';
import { User } from '../user';

@Component({
    selector: 'wt-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {

    private _userStore = new UserStore();

    constructor() {
        this._userStore.addUser(new User({
            firstName: 'Foo',
            lastName: 'BAR'
        }));
        this._userStore.addUser(new User({
            lastName: 'DOE'
        }));
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
