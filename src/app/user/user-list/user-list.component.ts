import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { UserStore } from '../user-store';
import { User } from '../user';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';

@Component({
    selector: 'wt-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

    editedUser: User;
    userList$: Observable<User[]>;

    private _subscription: Subscription;

    constructor(private _userStore: UserStore) {
    }

    ngOnInit() {
        this._retrieveUserList();
    }

    addUser(user: User) {
        this._userStore.addUser(user)
            .do(() => this._retrieveUserList())
            .subscribe();

    }

    removeUser(user) {
        this._userStore.removeUser(user);
        this._retrieveUserList();
    }

    cloneUser(user: User) {
        this.addUser(new User(user));
    }

    editUser(user: User) {
        this.editedUser = user;
    }

    replaceUser(previousUser: User, newUser: User) {
        this._userStore.replaceUser(previousUser, newUser);
        this.editedUser = null;
    }

    undo() {
        this._userStore.undo();
    }

    async _retrieveUserList() {
        this.userList$ = this._userStore.getUserList();
    }
}
