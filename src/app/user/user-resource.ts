/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */

import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserResource {

    private _resourceUrl = 'https://wt-users.getsandbox.com/users';

    constructor(private _httpClient: HttpClient) {
    }

    addUser(user: User) {

        return this._httpClient
            .post(this._resourceUrl, user)
            .map(data => new User(data));

    }

    getUserList(params = {}): Observable<User[]> {
        return this._httpClient
            .get<any[]>(this._resourceUrl, {
                params
            })
            .map(userDataList => {
                return userDataList
                    .map(userData => new User(userData));
            });
    }

}
