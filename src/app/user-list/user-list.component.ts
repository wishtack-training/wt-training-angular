import { Component, OnInit } from '@angular/core';
import { UserStore } from '../user/user-store';

@Component({
    selector: 'wt-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
})
export class UserListComponent {

    name: string;

    private _userStore = new UserStore();

}
