import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../user';
import { UserStore } from '../user-store';

@Component({
    selector: 'wt-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

    userForm = new FormGroup({
        firstName: new FormControl(),
        lastName: new FormControl(null, [
            Validators.maxLength(20)
        ])
    });

    private _userStore = new UserStore();

    constructor() {
    }

    ngOnInit() {
    }

    addUser() {
        const user = new User(this.userForm.value);
        this._userStore.addUser(user);
        this.userForm.reset();
    }

    getUserList() {
        return this._userStore.getUserList();
    }

    removeUser(user: User) {
        this._userStore.removeUser(user);
    }

    getPictureUrl(user: User) {
        return `https://robohash.org/${user.firstName}`;
    }

}
