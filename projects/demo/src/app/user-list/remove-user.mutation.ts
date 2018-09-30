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
export class RemoveUserMutation extends Mutation<{ removeUser: User }, { userId: string }> {

    document = gql`
        mutation RemoveUser($userId: ID) {
            removeUser(userId: $userId)
        }
    `;

    constructor(private _userListQuery: UserListQuery, apollo: Apollo) {
        super(apollo);
    }

    removeUser(userId: string): Observable<FetchResult<{ removeUser: User }>> {
        return this.mutate({userId}, {
            update: (dataProxy: DataProxy) => {
                /* Update locale cache. */
                const query = this._userListQuery.document;
                const data = dataProxy.readQuery<{ users: Partial<User>[] }>({query});
                const users = data.users.filter(user => user.id !== userId);
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
