import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApolloQueryResult } from 'apollo-client';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../user';
import { AddUserMutation } from './add-user.mutation';
import { UserListQuery } from './user-list.query';

@Component({
    selector: 'wt-user-list',
    templateUrl: './user-list.component.html',
    styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

    userForm = new FormGroup({
        firstName: new FormControl(),
        lastName: new FormControl()
    });

    userList: User[] = [];
    userList$: Observable<User[]>;

    constructor(
        private _addUserMutation: AddUserMutation,
        private _userListQuery: UserListQuery
    ) {
        this.userList$ = this._userListQuery.watchUserList().pipe(map(({data}) => data));
    }

    ngOnInit() {
    }

    addUser() {
        const user = new User(this.userForm.value);
        this._addUserMutation.mutate({user}).subscribe();
    }

    removeUser(user: User) {
        this.userList = this.userList.filter(_user => _user !== user);
    }

}
