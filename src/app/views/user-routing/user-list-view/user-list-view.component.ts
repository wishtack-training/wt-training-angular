import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../../user/user';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime, map, shareReplay, startWith, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'wt-user-list-view',
    templateUrl: './user-list-view.component.html',
    styleUrls: ['./user-list-view.component.scss']
})
export class UserListViewComponent {

    searchForm = new FormGroup({
        firstName: new FormControl()
    });
    shouldShowList = false;
    userList$: Observable<User[]>;
    userCount$: Observable<number>;

    constructor(private _httpClient: HttpClient) {

        this.userList$ = this.searchForm.valueChanges
            .pipe(
                debounceTime(200),
                startWith({}),
                switchMap(query => {
                    return this._getUserList({query: query});
                }),
                shareReplay(1)
            );

        this.userCount$ = this.userList$
            .pipe(
                map(userList => userList.length)
            );

    }

    // @TODO: UserResource
    private _getUserList({query}): Observable<User[]> {

        return this._httpClient
            .get<any[]>('http://wt-users.getsandbox.com/users', {
                params: query
            })
            .pipe(
                map(userDataList => userDataList.map(data => new User(data)))
            );

    }

}
