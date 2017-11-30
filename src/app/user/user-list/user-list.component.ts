import { Component } from '@angular/core';
import { UserStore } from '../user-store';

@Component({
    selector: 'wt-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {

    firstName = 'Foo';

    private _userStore = new UserStore();

    addUser() {
        console.log(this.firstName);
    }

}
