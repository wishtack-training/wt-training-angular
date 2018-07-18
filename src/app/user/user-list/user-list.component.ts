import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserStore } from '../user-store';

@Component({
    selector: 'wt-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

    private _userStore = new UserStore();

    constructor() {
    }

    ngOnInit() {
        this._userStore.addUser(new User('Foo', 'BAR'));
        this._userStore.addUser(new User('Foo', 'BAR'));
    }

    addUser(user: User) {
        this._userStore.addUser(user);
    }

    getUserList() {
        return this._userStore.getUserList();
    }

}
