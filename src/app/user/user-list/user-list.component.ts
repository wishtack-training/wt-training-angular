import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { UserStore } from '../user-store';
import { User } from '../user';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'wt-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

    form: FormGroup;
    userList$: Observable<User[]>;

    constructor(private _userStore: UserStore) {

        this.form = new FormGroup(
            {
                firstName: new FormControl(),
                lastName: new FormControl()
            }
        );

        this.userList$ = this._userStore.userList$;

    }

    ngOnInit() {

    }

    addUser() {

        const user = new User(this.form.value);

        this._userStore.addUser(user);
        this.form.reset();

    }

    removeUser(user) {
        this._userStore.removeUser(user);
    }

    undo() {
        this._userStore.undo();
    }

}
