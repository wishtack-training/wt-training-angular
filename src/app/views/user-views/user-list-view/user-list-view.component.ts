import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../../user/user';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'wt-user-list-view',
    templateUrl: './user-list-view.component.html',
    styleUrls: ['./user-list-view.component.css']
})
export class UserListViewComponent implements OnInit {

    userList$: Observable<User[]>;

    constructor(private _httpClient: HttpClient) {
    }

    ngOnInit() {

        /* @TODO move this to a service. */
        this.userList$ = this._httpClient.get('http://wt-users.getsandbox.com/users')
            .retry(3)
            .map(userDataList => {
                return userDataList
                    .map(data => new User(data));
            });

    }

}
