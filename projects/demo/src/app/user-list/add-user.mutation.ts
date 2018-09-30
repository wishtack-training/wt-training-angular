/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */

import { Injectable } from '@angular/core';
import { Apollo, Mutation } from 'apollo-angular';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { FetchResult } from 'apollo-link';
import gql from 'graphql-tag';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../user';
import { UserListQuery } from './user-list.query';
import { DataProxy } from 'apollo-cache';

@Injectable({
    providedIn: 'root'
})
export class AddUserMutation extends Mutation<{ addUser: User }, { user: User }> {

    document = gql`
        mutation AddUser($user: UserInput) {
            addUser(user: $user) {
                id
                firstName
                lastName
            }
        }
    `;

    constructor(private _userListQuery: UserListQuery, apollo: Apollo) {
        super(apollo);
    }

    addUser(user: User): Observable<FetchResult<{ addUser: User }>> {

        return this.mutate({user}, {
            update: (dataProxy: DataProxy, {data: {addUser}}) => {
                /* Update locale cache. */
                const createdUser = addUser;
                const query = this._userListQuery.document;
                const data = dataProxy.readQuery<{ users: Partial<User>[] }>({query});
                const users = [...data.users, createdUser];
                dataProxy.writeQuery({
                    query,
                    data: {
                        ...data,
                        users
                    }
                });
            }
        });

    }

}
