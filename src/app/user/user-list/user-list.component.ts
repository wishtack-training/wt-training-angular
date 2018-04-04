import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from '../user';
import { UserStore } from '../user-store';

@Component({
    selector: 'wt-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

    userForm = new FormGroup({
        firstName: new FormControl(),
        lastName: new FormControl()
    });

    private _userStore = new UserStore();

    ngOnInit() {
        this._userStore.addUser(new User('Foo', 'BAR'));
        this._userStore.addUser(new User('John', 'DOE'));
    }

    addUser() {

        const user = new User(
            this.userForm.value.firstName,
            this.userForm.value.lastName
        );

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
