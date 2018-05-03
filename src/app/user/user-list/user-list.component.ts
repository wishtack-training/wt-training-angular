import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserStore } from '../user-store';

@Component({
    selector: 'wt-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: [
        './user-list.component.scss'
    ]
})
export class UserListComponent implements OnInit {

    private _userStore = new UserStore();

    constructor() {
    }

    ngOnInit() {
    }

    addUser() {
        this._userStore.addUser(new User('Foo', 'BAR'));
    }

    getUserList() {
        return this._userStore.getUserList();
    }

    removeUser(user) {
        this._userStore.removeUser(user);
    }

}
