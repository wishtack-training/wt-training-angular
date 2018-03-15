import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../../user/user';

@Component({
    selector: 'wt-user-list-view',
    templateUrl: './user-list-view.component.html',
    styleUrls: ['./user-list-view.component.scss']
})
export class UserListViewComponent implements OnInit {

    userList: User[];

    constructor(private _httpClient: HttpClient) {
    }

    ngOnInit() {

        // @TODO: UserResource.getUserList(...)
        this._httpClient.get<any[]>('http://wt-users.getsandbox.com/users')
            .subscribe(userDataList => {

                this.userList = userDataList
                    .map(userData => new User(userData));

            });
    }

}
