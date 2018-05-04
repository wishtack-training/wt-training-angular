import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, debounceTime, map, startWith, switchMap } from 'rxjs/operators';
import { User } from '../user';

@Component({
    selector: 'wt-user-search',
    templateUrl: './user-search.component.html',
    styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit {

    searchForm = new FormGroup({
        firstName: new FormControl()
    });
    userList$: Observable<User[]>;

    constructor(private _httpClient: HttpClient) {

        this.userList$ = this.searchForm.valueChanges
            .pipe(
                startWith({
                    firstName: ''
                }),
                debounceTime(300),
                switchMap(value => {
                    return this._search(value);
                })
            );

    }

    ngOnInit() {
    }

    /* @TODO: Move this to a service. */
    private _search(value: { firstName: string }): Observable<User[]> {

        /* Using `encodeURIComponent` to esacpe URI for security reasons. */
        const firstName = encodeURIComponent(value.firstName);

        return this._httpClient
            .get<any[]>(`https://wt-users.getsandbox.com/users?firstName=${firstName}`)
            .pipe(
                /* Ignore errors. */
                catchError(error => of([])),
                map(userDataList => {
                    return userDataList
                        .map(userData => new User(userData));
                })
            );

    }
}
