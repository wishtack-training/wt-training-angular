import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserStore } from '../user-store';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'wt-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

    selectedUser: User;

    constructor(private _userStore: UserStore) {
    }

    ngOnInit() {
    }

    addUser(user: User) {
        this._userStore.addUser(user);
    }

    removeUser(user: User) {
        this._userStore.removeUser(user);
    }

    updateUser(user: User) {
        this._userStore.replaceUser(this.selectedUser, user);
        this.selectedUser = null;
    }

    getUserList() {
        return this._userStore.getUserList();
    }

    selectUser(user: User) {
        this.selectedUser = user;
    }

}
