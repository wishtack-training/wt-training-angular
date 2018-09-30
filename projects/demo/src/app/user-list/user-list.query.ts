/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */

import { Injectable } from '@angular/core';
import { Query } from 'apollo-angular';
import gql from 'graphql-tag';
import { User } from '../user';

@Injectable({
    providedIn: 'root'
})
export class UserListQuery extends Query<{ users: User[] }> {

    document = gql`query UserList {
        users {
            id
            firstName
            lastName
        }
    }`;


}
