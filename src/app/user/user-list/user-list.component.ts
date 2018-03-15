import { Component } from '@angular/core';
import { UserStore } from '../user-store';
import { User } from '../user';

@Component({
    selector: 'wt-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {

    editedUser;

    private _userStore = new UserStore();

    addUser(user: User) {
        this._userStore.addUser(user);
    }

    getUserList() {
        return this._userStore.getUserList();
    }

    removeUser(user: User) {
        this._userStore.removeUser(user);
    }

    editUser(user: User) {
        this.editedUser = user;
    }

    replaceUser({previousUser, currentUser}: {previousUser: User, currentUser: User}) {
        this._userStore.replaceUser({previousUser, currentUser});
        this.editedUser = null;
    }

    undo() {
        this._userStore.undo();
    }
}
