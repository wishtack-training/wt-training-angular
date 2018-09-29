/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */

import { Injectable } from '@angular/core';
import { Query } from 'apollo-angular';
import { WatchQueryOptions } from 'apollo-angular/types';
import { ApolloQueryResult } from 'apollo-client';
import gql from 'graphql-tag';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../user';

@Injectable({
    providedIn: 'root'
})
export class UserListQuery extends Query<{users: User[]}> {

    document = gql`query UserList {
        users {
            id
            firstName
            lastName
        }
    }`;

    watchUserList(options?: WatchQueryOptions): Observable<ApolloQueryResult<User[]>> {
        return this.watch({}, options)
            .valueChanges
            .pipe(map(({data, ...args}) => {
                return {
                    ...args,
                    data: data.users.map(userData => new User(userData))
                };
            }));
    }

}
