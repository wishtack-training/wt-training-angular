import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { UserStore } from '../user-store';
import { User } from '../user';
import { UserFormConfig } from '../user-form/user-form.component';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

/**
 * @deprecated should be renamed to user-container... or die...
 */
@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'wt-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

    formConfig: UserFormConfig = {
        buttonLabel: 'SEARCH',
        checkBlabla: true,
        validationEnabled: false
    };

    userList$: Observable<User[]>;
    userCount$: Observable<number>;

    constructor(private _userStore: UserStore) {

        this.userList$ = this._userStore.userList$;

        this.userCount$ = this.userList$
            .map(userList => userList.length);

        this.userCount$
            .filter(count => count > 5)
            .subscribe(() => alert('ARRETE!!!'));
    }

    async ngOnInit() {

        const user = await this._userStore.getUser(0)
            .toPromise();

        console.log(user);

    }


    addUser(user) {
        this._userStore.addUser(user);
    }

    undo() {
        this._userStore.undo();
    }

}
