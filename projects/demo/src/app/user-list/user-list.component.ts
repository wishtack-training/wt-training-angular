import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from '../user';

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

    userList: User[] = [];

    ngOnInit() {
    }

    addUser() {
        this.userList = [...this.userList, new User(this.userForm.value)];
        this.userForm.reset();
    }

    removeUser(user: User) {
        this.userList = this.userList.filter(_user => _user !== user);
    }

}
