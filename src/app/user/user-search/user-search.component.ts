import { HttpClient, ɵHttpInterceptingHandler } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { interval, Observable } from 'rxjs';
import {
    bufferCount,
    bufferTime,
    debounceTime,
    filter,
    map,
    retry,
    shareReplay,
    switchMap,
    take
} from 'rxjs/operators';
import { User } from '../user';

@Component({
    selector: 'wt-user-search',
    templateUrl: './user-search.component.html',
    styleUrls: ['./user-search.component.scss']
})
export class UserSearchComponent implements OnInit {

    keywordsControl = new FormControl();
    userList$: Observable<User[]>;
    userCount: number;
    userList: User[];

    constructor(private _httpClient: HttpClient) {

        this.userList$ = this.keywordsControl.valueChanges
            .pipe(
                debounceTime(200),
                switchMap(keywords => {
                    return this._httpClient.get<User[]>(`http://wt-users.getsandbox.com/users?firstName=${encodeURIComponent(keywords)}`);
                }),
                map(userDataList => {
                    return userDataList
                        .map(userData => {
                            return new User(userData);
                        });
                }),
                shareReplay(1)
            );

    }

    ngOnInit() {

        // @TODO: Use rx scavenger.
        this.userList$.subscribe(userList => {
            this.userList = userList;
            this.userCount = this.userList.length;
        });

        // const data$ = interval(200);
        //
        // const double$ = data$
        //     .pipe(
        //         map(data => {
        //
        //             if (data === 5) {
        //                 throw new Error('oups!');
        //             }
        //
        //             return data * 2;
        //         }),
        //         filter(data => data !== 2)
        //     );
        //
        // double$
        //     .pipe(
        //         bufferCount(3),
        //         take(3),
        //         retry(3)
        //     )
        //     .subscribe({
        //         next: data => {
        //             console.log(data);
        //         },
        //         error: () => console.log('OUPS!'),
        //         complete: () => {
        //             console.log('done');
        //         }
        //     });


    }

    async searchUsers() {

        const firstName = this.keywordsControl.value;

        const firstNameList = await Promise.resolve([
            'foo',
            'john'
        ]);

        const resultPromiseList = firstNameList.map(_firstName => {
            return fetch(`http://wt-users.getsandbox.com/users?firstName=${encodeURIComponent(_firstName)}`)
                .then(response => response.json());
        });

        const resultList = await Promise.all(resultPromiseList);

        console.log(resultList);

        try {
            const response = await fetch(`http://wt-users.getsandbox.com/users?firstName=${encodeURIComponent(firstName)}`);
            const data = await response.json();
            console.log(data);

        } catch (e) {
            console.error('error!');
        }

    }
}
