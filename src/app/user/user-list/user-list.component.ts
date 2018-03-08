import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserResource } from '../user-resource';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'wt-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

    editedUser = null;
    userList: User[];

    constructor(
        private _httpClient: HttpClient,
        private _userResource: UserResource) {
    }

    ngOnInit() {
        this._userResource
            .getUserList()
            .subscribe(userList => this.userList = userList);
    }

    addUser(user: User) {
        this._userResource.addUser(user);
    }

}
