import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { User } from '../../../user/user';

@Component({
    selector: 'wt-user-detail',
    templateUrl: './user-detail.component.html',
    styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

    user$: Observable<User>;
    private _userId: string;

    constructor(
        private _httpClient: HttpClient,
        private _route: ActivatedRoute,
        private _router: Router) {
    }

    ngOnInit() {

        this._userId = this._route.snapshot.params.userId;

        this.user$ = this._httpClient.get(`https://wt-users.getsandbox.com/users/${this._userId}`)
            .pipe(
                map(userData => new User(userData))
            );

    }

    updateUser(user: User) {

        this._httpClient.patch(`https://wt-users.getsandbox.com/users/${this._userId}`, user)
            .subscribe(() => {
                this._router.navigate(['/search']);
            });

    }

}
