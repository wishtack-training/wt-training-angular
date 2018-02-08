import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { User } from '../../../user/user';

@Component({
    selector: 'wt-user-detail-view',
    templateUrl: './user-detail-view.component.html',
    styleUrls: ['./user-detail-view.component.css']
})
export class UserDetailViewComponent implements OnInit {
    private user: User;

    constructor(
        private _httpClient: HttpClient,
        private _route: ActivatedRoute) {
    }

    ngOnInit() {

        const userId = this._route.snapshot.params['userId'];

        this._httpClient.get(`https://wt-users.getsandbox.com/users/${userId}`)
            .map(data => new User(data))
            .subscribe(
                user => {
                    this.user = user;
                });

    }

}
