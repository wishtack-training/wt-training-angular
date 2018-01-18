import { Component, OnInit } from '@angular/core';
import { UserStore } from '../user-store';
import { User } from '../user';

@Component({
    selector: 'wt-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

    user = new User();

    private _userStore = new UserStore();

    constructor() {
    }

    ngOnInit() {
    }

    addUser() {
        this._userStore.addUser(this.user);
        this.user = new User();
    }

    getUserList() {
        return this._userStore.getUserList();
    }

    removeUser(user) {
        this._userStore.removeUser(user);
    }

}
