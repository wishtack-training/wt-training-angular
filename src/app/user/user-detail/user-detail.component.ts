/**
 *
 * (c) 2013-2017 Wishtack
 *
 * $Id: $
 */

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserResource } from '../user-resource';
import { User } from '../user';

@Component({
    selector: 'wt-user-detail',
    template: `
<wt-user-preview
        *ngIf="user"
        [user]="user"></wt-user-preview>    
`
})
export class UserDetailComponent {

    user: User;

    constructor(
        private _route: ActivatedRoute,
        private _userResource: UserResource
    ) {
    }

    ngOnInit() {

        const userId = this._route.snapshot.params['userId'];

        this._userResource.getUser(userId)
            .subscribe(user => this.user = user);

    }

}
