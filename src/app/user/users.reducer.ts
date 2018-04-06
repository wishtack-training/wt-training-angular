import { Action } from '@ngrx/store';
import { User } from './user';


export interface UsersState {
    userList: User[];
}

export const initialState: UsersState = {
    userList: []
};

export function usersReducer(state = initialState, action: Action): UsersState {

    switch (action.type) {

        case 'wt/user/add':

            const newState: UsersState = {
                userList: [...state.userList, action['user']]
            };

            return newState;

        default:
            return state;

    }

}
