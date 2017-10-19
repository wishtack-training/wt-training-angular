import { Component, Input, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
    selector: 'wt-user-selector',
    templateUrl: './user-selector.component.html',
    styleUrls: ['./user-selector.component.css']
})
export class UserSelectorComponent implements OnInit {

    @Input() userList = [
        new User({firstName: 'Foo', lastName: 'BAR'}),
        new User({firstName: 'John', lastName: 'DOE'})
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
