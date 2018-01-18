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
        new User({
            firstName: 'Foo',
            lastName: 'BAR'
        }),
        new User({
            firstName: 'John',
            lastName: 'DOE'
        })
    ];

    selectUser(user: User) {
        this.selectedUser = user;
    }

}

