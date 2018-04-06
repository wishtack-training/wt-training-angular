import { ActionReducerMap } from '@ngrx/store';
import { usersReducer, UsersState } from '../user/users.reducer';

export interface AppState {
    users: UsersState;
}

export const reducers: ActionReducerMap<AppState> = {
    users: usersReducer
};
