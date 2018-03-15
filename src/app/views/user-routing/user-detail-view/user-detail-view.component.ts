import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { User } from '../../../user/user';

@Component({
    selector: 'wt-user-detail-view',
    templateUrl: './user-detail-view.component.html',
    styleUrls: ['./user-detail-view.component.scss']
})
export class UserDetailViewComponent implements OnInit {

    user: User;
    userId: string;

    constructor(
        private _httpClient: HttpClient,
        private _route: ActivatedRoute,
        private _router: Router) {
    }

    ngOnInit() {
        this.userId = this._route.snapshot.params['userId'];

        this._httpClient.get<any>(`http://wt-users.getsandbox.com/users/${encodeURIComponent(this.userId)}`)
            .subscribe(userData => {
                this.user = new User(userData);
            });

    }

    updateUser(user: User) {

        this._httpClient.patch<any>(`http://wt-users.getsandbox.com/users/${encodeURIComponent(this.userId)}`, user)
            .subscribe(() => {
                this._router.navigate(['/users']);
            });


    }
}
