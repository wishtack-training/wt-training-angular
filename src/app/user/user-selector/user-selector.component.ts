/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */

import { Component } from '@angular/core';
import { User } from '../user';

@Component({
    selector: 'wt-user-selector',
    styleUrls: [
        './user-selector.component.css'
    ],
    templateUrl: './user-selector.component.html'
})
export class UserSelectorComponent {

    selectedUser: User;

    userList = [
        new User('Foo', 'BAR'),
        new User('John', 'DOE'),
    ];

    selectUser(user: User) {
        this.selectedUser = user;
    }

    getPictureUrl(user: User) {
        return `https://robohash.org/${user.firstName}`;
    }

}

