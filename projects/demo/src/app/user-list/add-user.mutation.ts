/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */

import { Injectable } from '@angular/core';
import { Mutation } from 'apollo-angular';
import gql from 'graphql-tag';

import { User } from '../user';

@Injectable({
    providedIn: 'root'
})
export class AddUserMutation extends Mutation<User, {user: User}> {

    document = gql`
        mutation AddUser($user: UserInput) {
            addUser(user: $user) {
                id
                firstName
                lastName
            }
        }
    `;

}
