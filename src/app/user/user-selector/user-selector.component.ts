import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
    selector: 'wt-user-selector',
    templateUrl: './user-selector.component.html',
    styleUrls: ['./user-selector.component.css']
})
export class UserSelectorComponent implements OnInit {

    userList = [
        new User('Foo', 'BAR'),
        new User('John', 'DOE')
    ];

    selectedUser: User;

    constructor() {
    }

    ngOnInit() {
    }

    isUserSelected(user: User) {
        return this.selectedUser === user;
    }

    selectUser(user: User) {
        this.selectedUser = user;
    }
}
