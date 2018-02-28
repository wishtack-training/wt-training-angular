import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UserStore } from '../user-store';
import { User } from '../user';

@Component({
    selector: 'wt-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {

    userTmp = new User();

    private _userStore = new UserStore();

    addUser() {
        this._userStore.addUser(this.userTmp);
        this.userTmp = new User();
    }

    getUserList() {
        return this._userStore.getUserList();
    }

    removeUser(user: User) {
        this._userStore.removeUser(user);
    }

}
