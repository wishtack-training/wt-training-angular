import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloQueryResult } from 'apollo-client';
import ApolloClient from 'apollo-client/ApolloClient';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../user';
import { AddUserMutation } from './add-user.mutation';
import { RemoveUserMutation } from './remove-user.mutation';
import { UserListQuery } from './user-list.query';

@Component({
    selector: 'wt-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
})
export class UserListComponent {

    userForm = new FormGroup({
        firstName: new FormControl(),
        lastName: new FormControl()
    });

    userList$: Observable<User[]>;

    constructor(
        private _addUserMutation: AddUserMutation,
        private _removeUserMutation: RemoveUserMutation,
        private _userListQuery: UserListQuery
    ) {
        this.userList$ = this._userListQuery.watch()
            .valueChanges
            .pipe(map(({data}) => data.users));
    }

    addUser() {
        this._addUserMutation.addUser(this.userForm.value).subscribe();
        this.userForm.reset();
    }

    removeUser(user: User) {
        this._removeUserMutation.removeUser(user.id).subscribe();
    }

}
