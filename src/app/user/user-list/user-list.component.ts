import { Component } from '@angular/core';
import { UserStore } from '../user-store';

@Component({
    selector: 'wt-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
})
export class UserListComponent {

    userName: string;

    private _userStore = new UserStore();

    addUser() {
        console.log(this.userName);
        this.userName = 'Foo';
    }

}
