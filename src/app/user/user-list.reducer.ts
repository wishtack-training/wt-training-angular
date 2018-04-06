import { Action } from '@ngrx/store';
import { User } from './user';
import { UserListActions, UserListActionTypes } from './user-list.actions';


export type UserListState = User[];

export const initialState: UserListState = [];

export function userListReducer(userList = initialState,
                                action: UserListActions): UserListState {

    switch (action.type) {

        case UserListActionTypes.UserAdd:
            return [...userList, action.user];

        case UserListActionTypes.UserRemove:
            return userList.filter(user => user !== action.user);

        default:
            return userList;

    }

}
