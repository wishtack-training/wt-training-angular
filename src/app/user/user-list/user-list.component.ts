import { Component } from '@angular/core';
import { UserStore } from '../user-store';
import { User } from '../user';

@Component({
    selector: 'wt-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
})
export class UserListComponent {

    user = new User();

    private _userStore = new UserStore();

    addUser() {
        this._userStore.addUser(this.user);
        this.user = new User();
    }

    getUserList() {
        return this._userStore.getUserList();
    }

}
