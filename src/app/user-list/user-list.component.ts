import { Component } from '@angular/core';
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

    constructor() {
        this._userStore.addUser(new User('Foo', 'BAR'));
        this._userStore.addUser(new User('John', 'DOE'));
    }

    addUser() {
        this._userStore.addUser(this.userTmp);
        this.userTmp = new User();
    }

    getPictureUrl(user: User) {
        return `https://robohash.org/${user.firstName}?set=set4`;
    }

    getUserList() {
        return this._userStore.getUserList();
    }

    removeUser(user: User) {
        this._userStore.removeUser(user);
    }

}
