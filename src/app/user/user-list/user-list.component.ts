import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserResource } from '../user-resource';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/retry';

@Component({
    selector: 'wt-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

    filterParams$ = new BehaviorSubject({});
    editedUser = null;
    userList: User[];

    constructor(
        private _httpClient: HttpClient,
        private _userResource: UserResource) {
    }

    ngOnInit() {

        this.filterParams$
            .debounceTime(200)
            .map(filterParams => this._removeNullProperties(filterParams))
            .switchMap(filterParams => this._userResource
                .getUserList(filterParams)
                .retry(3)
            )
            .subscribe(userList => this.userList = userList);

    }

    addUser(user: User) {
        this._userResource.addUser(user)
            .subscribe(_user => {
                this.userList = [...this.userList, _user];
            });
    }

    updateUserListFilterParams(filterParams) {
        this.filterParams$.next(filterParams);
    }

    private _removeNullProperties(filterParams) {

        return Object.entries(filterParams)
            .filter(([key, value]) => value != null)
            .reduce((result, [key, value]) => {
                return {
                    ...result,
                    [key]: value
                };
            }, {});

    }
}
