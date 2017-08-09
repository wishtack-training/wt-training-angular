/**
 *
 * (c) 2013-2017 Wishtack
 *
 * $Id: $
 */


import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserStore } from '../user-store';

@Component({
    selector: 'wt-user-list-container',
    /* @todo: use templateUrl. */
    template: `
        <wt-user-form
                [class.wt-shake]="isAdding"
                [buttonLabel]="'ADD'"
                (onUserAdd)="addUser($event)"></wt-user-form>

        <wt-user-list
                [userList]="obsUserList | async"
                (onUserRemove)="removeUser($event)"></wt-user-list>

    `
})
export class UserListContainerComponent implements OnInit {

    obsUserList;
    isAdding = false;

    constructor(private _userStore: UserStore) {
    }

    ngOnInit() {

        /* View will subscribe to the replay subject using async pipe. */
        this.obsUserList = this._userStore.obsUserList;

        /* Retrieve user list from api. */
        this._userStore.getUserList().subscribe();

    }

    addUser(user: User) {
        this.isAdding = true;
        this._userStore.addUser(user)
            .finally(() => this.isAdding = false)
            .subscribe();
    }

    removeUser(user: User) {
        this._userStore.removeUser(user.id).subscribe();
    }

}
