import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../user';
import { UserStore } from '../user-store';

@Component({
    selector: 'wt-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
})
export class UserListComponent {

    userForm = new FormGroup({
        firstName: new FormControl(null, [
            Validators.required,
            Validators.maxLength(10)
        ]),
        lastName: new FormControl()
    });

    private _userStore = new UserStore();

    addUser() {

        const user = new User(this.userForm.value);

        this._userStore.addUser(user);

        this.userForm.reset();

    }

    getUserList() {
        return this._userStore.getUserList();
    }

    getPictureUrl(user: User) {
        return `https://robohash.org/${user.firstName}?set=set4`;
    }

    removeUser(user: User) {
        this._userStore.removeUser(user);
    }

}
