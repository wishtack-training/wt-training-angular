import { Action } from '@ngrx/store';
import { User } from './user';

export enum UserListActionTypes {
    UserAdd = '[UserList] Add',
    UserRemove = '[UserList] Remove'
}

export class UserAdd implements Action {

    readonly type = UserListActionTypes.UserAdd;

    constructor(public user: User) {
    }

}

export class UserRemove implements Action {

    readonly type = UserListActionTypes.UserRemove;

    /* @TODO: Remove by id instead of reference when we'll have ids. */
    constructor(public user: User) {
    }

}

export type UserListActions = UserAdd | UserRemove;
