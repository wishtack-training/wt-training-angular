
import { Component } from '@angular/core';
import { User } from './user/user';

@Component({
    selector: 'wt-app',
    templateUrl: './app.component.html',
    styleUrls: [
        './app.component.css'
    ]
})
export class AppComponent {

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

    getPictureUrl(user: User) {

        const userName = encodeURIComponent(user.firstName);

        return `https://robohash.org/${userName}`;

    }

    isUserSelected(user: User) {
        return this.selectedUser === user;
    }
}
