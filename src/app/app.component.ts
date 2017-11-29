import { Component } from '@angular/core';
import { User } from './user/user';


@Component({
    selector: 'wt-app',
    styleUrls: [
        './app.component.scss'
    ],
    templateUrl: './app.component.html'
})
export class AppComponent {

    selectedUser: User;

    userList = [
        new User('Foo', 'BAR'),
        new User('John', 'DOE')
    ];

    getPictureUrl(user: User) {
        return `http://robohash.org/${user.firstName}`;
    }

    selectUser(user: User) {
        this.selectedUser = user;
    }

}
