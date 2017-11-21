import { Component } from '@angular/core';
import { User } from '../../user/user';

@Component({
    selector: 'wt-app',
    styleUrls: [
        './app.component.css'
    ],
    templateUrl: './app.component.html'
})
export class AppComponent {

    selectedUser: User;
    userList = [
        new User('Foo', 'BAR'),
        new User('John', 'DOE')
    ];

    selectUser(user: User) {
        this.selectedUser = user;
    }

    getPictureUrl(selectedUser: User) {
        const path = encodeURIComponent(selectedUser.firstName);
        return `https://robohash.org/${path}`;
    }

    isUserSelected(user: User) {
        return user === this.selectedUser;
    }

}
