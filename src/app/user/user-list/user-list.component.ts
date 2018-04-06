import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../../reducers';
import { User } from '../user';
import { UserAdd, UserRemove } from '../user-list.actions';
import { UserStore } from '../user-store';

@Component({
    selector: 'wt-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
})
export class UserListComponent {

    editedUser: User;
    userList$: Store<User[]>;

    constructor(private _userStore: UserStore,
                private _store: Store<AppState>) {
        this.userList$ = this._store.select('userList');
    }

    addUser(user: User) {
        this._store.dispatch(new UserAdd(user));
    }

    removeUser(user: User) {
        this._store.dispatch(new UserRemove(user));
    }

    editUser(user: User) {
        this.editedUser = user;
    }

    updateUser(user: User) {

        this.replaceUser(this.editedUser, user);
        this.editedUser = null;

    }

    replaceUser(previousUser, currentUser) {

        this._userStore.replaceUser({
            previousUser,
            currentUser
        });

    }

    trackByIndex(index) {
        return index;
    }

}
