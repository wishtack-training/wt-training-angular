/**
 *
 * (c) 2013-2017 Wishtack
 *
 * $Id: $
 */

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { User } from '../../user/user';
import { UserStore } from '../../user/user-store';

@Component({
    selector: 'wt-user-detail-view',
    /* @todo move this to a <wt-user-detail> component. */
    template: `
<wt-user-form
        buttonLabel="SAVE"
        [user]="user"
        (onUserSubmit)="updateUser($event)"></wt-user-form>
<a
        *ngIf="user"
        [routerLink]="['/users', nextUserId()]">next</a>
`
})
export class UserDetailViewComponent implements OnInit {

    user: User;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _userStore: UserStore
    ) {
    }

    ngOnInit() {

        this._route.params
            .subscribe(params => {

                const userId = params['userId'];

                this.user = this._userStore.getUserById(userId);

            });


    }

    nextUserId() {
        return (parseInt(this.user.id, 10) + 1).toString();
    }

    updateUser(user: User) {
        this._userStore.updateUser(user);
        this._router.navigate(['/users']);
    }

}
