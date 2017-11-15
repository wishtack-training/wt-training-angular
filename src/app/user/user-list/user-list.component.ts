import { Component, OnInit } from '@angular/core';
import { UserStore } from '../user-store';
import { User } from '../user';

@Component({
    selector: 'wt-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

    userTmp = new User();

    private _userStore = new UserStore();

    constructor() {
    }

    ngOnInit() {
    }

    addUser() {
        this._userStore.addUser(this.userTmp);
        this.userTmp = new User();
    }

    getUserList() {
        return this._userStore.getUserList();
    }

    getUserPictureUrl(user: User) {
        return `http://robohash.org/${encodeURIComponent(user.firstName)}`;
    }

    removeUser(user) {
        this._userStore.removeUser(user);
    }

}
