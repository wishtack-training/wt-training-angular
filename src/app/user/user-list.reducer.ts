import { Action } from '@ngrx/store';
import { User } from './user';


export interface UserListState {
    userList: User[];
}

export const initialState: UserListState = {
    userList: []
};

export function userListReducer(state = initialState, action: Action): UserListState {

    switch (action.type) {

        default:
            return state;

    }

}
