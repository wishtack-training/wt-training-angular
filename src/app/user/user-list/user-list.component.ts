import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
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
        ]),
        addressList: new FormArray([])
    });

    private _userStore = new UserStore();

    constructor() {
    }

    ngOnInit() {
    }

    get addressControlList() {
        return this.userForm.get('addressList') as FormArray;
    }

    addAddress() {
        this.addressControlList.push(new FormGroup({
            street: new FormControl(null, [
                Validators.minLength(3)
            ]),
            city: new FormControl()
        }));
    }

    addUser() {
        const user = new User(this.userForm.value);
        this._userStore.addUser(user);
        this.userForm
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
