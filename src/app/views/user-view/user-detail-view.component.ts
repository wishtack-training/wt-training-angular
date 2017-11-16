/**
 *
 * (c) 2013-2017 Wishtack
 *
 * $Id: $
 */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserStore } from '../../user/user-store';
import { User } from '../../user/user';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/shareReplay';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/catch';

@Component({
    selector: 'wt-user-detail-view',
    template: `
<ng-container *ngIf="user$ | async as user">

    <wt-user-preview [user]="user"></wt-user-preview>
    
    <a [routerLink]="['/users', (nextId$ | async)]">next</a>
    
</ng-container>
    `
})
export class UserDetailViewComponent implements OnInit {

    user$: Observable<User>;
    nextId$: Observable<number>;

    constructor(private _route: ActivatedRoute,
                private _userStore: UserStore) {

    }

    async ngOnInit() {

        this.user$ = this._route.params
            .map(params => params.userId)
            .switchMap(userId => this._userStore.getUserById(userId))
            .shareReplay();

        this.nextId$ = this.user$.map(user => parseInt(user.id) + 1);

    }

}