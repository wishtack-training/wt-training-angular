/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, shareReplay, tap } from 'rxjs/operators';

@Injectable()
export class UserRepository {

    private _resourceUri = 'http://wt-users.getsandbox.com/users';
    private _userList$;

    constructor(private _httpClient: HttpClient) {

        this._userList$ = this._httpClient.get<Object[]>(this._resourceUri)
            .pipe(
                map(dataList => {
                    // @TODO: convert dataList to userList.
                    return dataList;
                }),
                shareReplay(1)
            );

    }

    getUserList() {
        return this._userList$;
    }

    addUser(user) {

        return this._httpClient.post(this._resourceUri, user);

    }
}
