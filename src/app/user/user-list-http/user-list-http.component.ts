import { Component, OnInit } from '@angular/core';
import { UserResource } from '../user-resource';
import { User } from '../user';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'wt-user-list-http',
    templateUrl: './user-list-http.component.html',
    styleUrls: ['./user-list-http.component.scss']
})
export class UserListHttpComponent implements OnInit {

    userList: User[];

    constructor(private _userResource: UserResource) {
    }

    ngOnInit() {
        this._userResource.getUserList()
            .subscribe(userList => this.userList = userList);
    }

    addUser(user: User) {

        this._userResource.create(user)
            .subscribe((_user) => {
                this.userList = [
                    ...this.userList,
                    _user
                ];
            });

    }

}
