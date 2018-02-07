import { Component, OnInit } from '@angular/core';
import { UserStore } from '../user-store';

@Component({
    selector: 'wt-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

    private _userStore = new UserStore();

    constructor() {
    }

    ngOnInit() {
    }

}
