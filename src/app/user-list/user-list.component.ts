import { Component, OnInit } from '@angular/core';
import { UserStore } from '../user/user-store';
import { User } from '../user/user';

@Component({
    selector: 'wt-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
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

    getPictureUrl(user: User) {
        return `https://robohash.org/${user.firstName}`;
    }

    removeUser(user: User) {
        this._userStore.removeUser(user);
    }
}
