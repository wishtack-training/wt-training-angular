/**
 *
 * (c) 2013-2017 Wishtack
 *
 * $Id: $
 */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { User } from './user';

@Injectable()
export class UserResource {

    private _resourceUrl = 'http://wt-users.getsandbox.com/users';

    constructor(private _httpClient: HttpClient) {
    }

    getUserList(): Observable<User[]> {

        return this._httpClient.get<any[]>(this._resourceUrl)
            .map(userDataList => {
                return userDataList.map(data => {
                    return Object.assign(new User(), data);
                });
            });

    }

    create(user: User) {

        return this._httpClient.post(this._resourceUrl, user)
            .map(data => Object.assign(new User(), data));

    }

    removeUser(userId: string) {

        return this._httpClient.delete(`${this._resourceUrl}/${userId}`);

    }

    updateUser(userId: string, userData: User) {

        return this._httpClient.patch(`${this._resourceUrl}/${userId}`, userData)
            .map(data => Object.assign(new User(), data));

    }

    getUser(userId: string) {

        return this._httpClient.get(`${this._resourceUrl}/${userId}`)
            .map(data => Object.assign(new User(), data));

    }
}
