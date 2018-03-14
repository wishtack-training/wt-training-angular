import { Component } from '@angular/core';
import { UserStore } from '../user/user-store';
import { User } from '../user/user';

@Component({
    selector: 'wt-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
})
export class UserListComponent {

    private _userStore = new UserStore();

    constructor() {
        this._userStore.addUser(new User('Foo', 'BAR'));
        this._userStore.addUser(new User('John', 'DOE'));
    }

}
