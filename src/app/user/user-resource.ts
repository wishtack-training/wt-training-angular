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

    constructor(private _httpClient: HttpClient) {
    }

    addUser(user: User) {

    }

    getUserList(): Observable<User[]> {
        return this._httpClient
            .get<any[]>('https://wt-users.getsandbox.com/users')
            .map(userDataList => {
                return userDataList
                    .map(userData => new User(userData));
            });
    }

}
