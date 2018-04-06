import { ActionReducerMap } from '@ngrx/store';
import { userListReducer, UserListState } from '../user/user-list.reducer';

export interface AppState {
    userList: UserListState;
}

export const reducers: ActionReducerMap<AppState> = {
    userList: userListReducer
};
