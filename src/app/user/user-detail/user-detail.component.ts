import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserResource } from '../user-resource';
import { Observable } from 'rxjs/Observable';
import { User } from '../user';
import { from } from 'rxjs/observable/from';

@Component({
    selector: 'wt-user-detail',
    templateUrl: './user-detail.component.html',
    styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

    user$: Observable<User>;

    constructor(private _route: ActivatedRoute,
                private _userResource: UserResource) {
    }

    ngOnInit() {

        const { userId } = this._route.snapshot.params;

        this.user$ = this._userResource.getUser(userId)
            .catch(() => from([
                new User({
                    firstName: 'UNKNOWN',
                    lastName: 'UNKNOWN'
                })
            ]));

    }

}
