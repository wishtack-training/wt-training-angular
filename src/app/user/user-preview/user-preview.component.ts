import { Component } from '@angular/core';
import { User } from '../user';

@Component({
    selector: 'wt-user-preview',
    templateUrl: './user-preview.component.html',
    styleUrls: ['./user-preview.component.css']
})
export class UserPreviewComponent {

    selectedUser: User;
    userList = [
        new User('Foo', 'BAR'),
        new User('John', 'DOE')
    ];

    selectUser(user: User) {
        this.selectedUser = user;
    }

    getPictureUrl(selectedUser: User) {
        return `https://robohash.org/${selectedUser.firstName}`;
    }
}
