import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { User } from '../../../user/user';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/shareReplay';

@Component({
    selector: 'wt-user-detail-view',
    templateUrl: './user-detail-view.component.html',
    styleUrls: ['./user-detail-view.component.css']
})
export class UserDetailViewComponent implements OnInit {

    user$: Observable<User>;

    constructor(
        private _httpClient: HttpClient,
        private _route: ActivatedRoute,
        private _router: Router) {
    }

    ngOnInit() {

        const { userId } = this._route.snapshot.params;

        this.user$ = this._httpClient.get(`http://wt-users.getsandbox.com/users/${userId}`)
            .map(data => new User(data))
            // .switchMap(user => {
            //     return this._httpClient.get('products');
            // })
            .shareReplay();

    }

    updateUser(userId, user: User) {

        this._httpClient.patch(`http://wt-users.getsandbox.com/users/${userId}`, user)
            .subscribe(() => {
                this._router.navigate(['/users']);
            });

    }


}
