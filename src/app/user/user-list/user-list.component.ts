import { Component, OnInit } from '@angular/core';
import { UserStore } from '../user-store';
import { User } from '../user';

@Component({
    selector: 'wt-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

    private _userStore = new UserStore();

    constructor() {
    }

    ngOnInit() {

        this._userStore.addUser(new User('Foo', 'BAR'));
        this._userStore.addUser(new User('John', 'DOE'));

    }

}
