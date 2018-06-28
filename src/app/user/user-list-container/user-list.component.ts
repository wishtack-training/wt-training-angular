import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { interval } from 'rxjs';
import { bufferCount, filter, map, retry, take } from 'rxjs/operators';
import { User } from '../user';
import { UserRepository } from '../user-repository';
import { UserStore } from '../user-store';

@Component({
    selector: 'wt-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
})
export class UserListComponent {

    selectedUser: User;
    userList: User[];

    constructor(
        private _userStore: UserStore) {
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
