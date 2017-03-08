import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { UserStore } from '../user-store';
import { Observable } from 'rxjs';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
    selector: 'wt-user-detail-container',
    templateUrl: './user-detail-container.component.html',
    styleUrls: ['./user-detail-container.component.css']
})
export class UserDetailContainerComponent implements OnChanges {

    @Input() userId: string;

    obsUser: Observable<User>;

    constructor(
        private _router: Router,
        private _userStore: UserStore
    ) {
    }

    ngOnChanges(changes) {

        /* Load user if userId changes. */
        if (changes.userId != null) {
            this._retrieveUser();
        }

    }

    updateUser(user: User) {

        this._userStore.updateUser(user)
            .subscribe(null, null, () => this._router.navigate(['/users']));

    }

    private _retrieveUser() {
        this.obsUser = this._userStore.getUser(this.userId);
    }
}
