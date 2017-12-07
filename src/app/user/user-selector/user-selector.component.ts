import { Component } from '@angular/core';
import { User } from '../user';

@Component({
    selector: 'wt-user-selector',
    templateUrl: './user-selector.component.html',
    styleUrls: ['./user-selector.component.scss']
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
