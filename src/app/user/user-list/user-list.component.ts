import { Component, OnInit } from '@angular/core';
import { UserStore } from '../user-store';
import { User } from '../user';
import { UserFormReactiveComponent } from '../user-form-reactive/user-form-reactive.component';

@Component({
    selector: 'wt-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

    private _userStore = new UserStore();

    component;

    constructor() {
    }

    ngOnInit() {
    }

    addUser(user: User) {
        this._userStore.addUser(user);
    }

    getUserList() {
        return this._userStore.getUserList();
    }

    removeUser(user) {
        this._userStore.removeUser(user);
    }

}
