import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
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

    private _userStore = new UserStore();

    constructor() {
        this._userStore.addUser(new User({
            firstName: 'Nathalie',
            lastName: 'ARDUINI'
        }));
        this._userStore.addUser(new User({
            firstName: 'Lorena',
            lastName: 'GALVEZ'
        }));
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
