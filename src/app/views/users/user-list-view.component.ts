/**
 *
 * (c) 2013-2017 Wishtack
 *
 * $Id: $
 */

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from '../../shared/app-config';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
    selector: 'wt-user-list-view',
    template: `
<div>LIST ({{ userCount$ | async }})</div>
<wt-user-list></wt-user-list>
<!--<wt-user-list [userList]="userList$ | async"></wt-user-list>-->
`
})
export class UserListViewComponent implements OnInit {

    userList$: Observable<any[]>;
    userCount$: Observable<number>;

    constructor(
        private _appConfig: AppConfig,
        private _httpClient: HttpClient) {
    }

    ngOnInit() {


        const url = `${this._appConfig.getApiUrl()}/users`;

        this.userList$ = this._httpClient.get<any[]>(url);

        this.userCount$ = this.userList$
            .map(userList => userList.length);

    }

}
