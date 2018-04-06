import { ActionReducerMap } from '@ngrx/store';
import { userListReducer, UserListState } from '../user/user-list.reducer';

export interface AppState {
    users: UserListState;
}

export const reducers: ActionReducerMap<AppState> = {
    users: userListReducer
};
