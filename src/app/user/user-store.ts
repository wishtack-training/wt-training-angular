/**
 *
 * (c) 2013-2017 Wishtack
 *
 * $Id: $
 */

import { Injectable } from '@angular/core';
import { User } from './user';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserStore {

    private _userList$ = new BehaviorSubject<User[]>([]);
    private _userListHistory: User[][] = [];

    constructor(private _httpClient: HttpClient) {

    }

    get userList$() {
        return this._userList$.asObservable();
    }

    addUser(user: User) {
        const userList = [...this._getUserList(), user];
        this._updateUserList(userList);
    }

    removeUser(user: User) {
        const userList = this._getUserList()
            .filter(_user => _user !== user);
        this._updateUserList(userList);
    }

    undo() {

        if (this._userListHistory.length === 0) {
            return;
        }

        this._userList$.next(this._userListHistory.pop());

    }

    loadUserList(): Observable<User[]> {

        return this._httpClient
            .get<Object[]>('http://wt-users.getsandbox.com/users')
            .map(body => {
                return body.map(data => new User(data));
            })
            .do(userList => this._updateUserList(userList));


    }

    async loadUserListOldSchool(): Promise<User[]> {

        const body = await this._httpClient
            .get<Object[]>('http://wt-users.getsandbox.com/users')
            .toPromise();

        const userList = body.map(data => new User(data));

        this._updateUserList(userList);

        return userList;

    }

    /* @todo: can do better... */
    replaceUser({previous, current}: {previous: User; current: User}) {

        let userList = this._getUserList();

        userList = userList.map(user => {

            if (user === previous) {
                return current;
            }

            return user;

        });

        this._updateUserList(userList);

    }

    _getUserList(): User[] {
        return this._userList$.getValue();
    }

    _updateUserList(userList) {
        this._userListHistory.push(this._getUserList());
        this._userList$.next(userList);
    }

}
