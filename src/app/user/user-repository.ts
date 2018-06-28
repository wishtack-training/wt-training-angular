import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './user';

@Injectable({
    providedIn: 'root'
})
export class UserRepository {

    constructor(private _httpClient: HttpClient) {
    }

    searchUsers(firstName: string): Observable<User[]> {
        return this._httpClient
            .get<any[]>(`https://wt-users.getsandbox.com/users?firstName=${encodeURIComponent(firstName)}`)
            .pipe(
                map(data => {
                    return data.map(userData => new User(userData));
                })
            );
    }

}
