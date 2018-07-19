import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User, UserSchema } from './user';

@Injectable({
    providedIn: 'root'
})
export class UserRepository {

    private _resourceBaseUrl = 'http://wt-users.getsandbox.com/users';

    constructor(private _httpClient: HttpClient) {
    }

    addUser(user: User): Observable<User> {
        return this._httpClient.post(this._resourceBaseUrl, user)
            .pipe(
                this._mapToUser()
            );
    }

    searchUsers(keywords: string): Observable<User[]> {

        const url = `${this._resourceBaseUrl}?firstName=${encodeURIComponent(keywords)}`;

        return this._httpClient.get<UserSchema[]>(url)
            .pipe(
                this._mapToUserList()
            );

    }

    getUserList(): Observable<User[]> {
        return this._httpClient.get<UserSchema[]>(this._resourceBaseUrl)
            .pipe(
                this._mapToUserList()
            );
    }

    private _mapToUserList() {
        return map((rawUserList: UserSchema[]) => {
            return rawUserList.map(rawUser => new User(rawUser));
        });
    }

    private _mapToUser() {
        return map((rawUser: UserSchema) => new User(rawUser));
    }
}
