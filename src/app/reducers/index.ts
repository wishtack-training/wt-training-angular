import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { cartReducer } from '../cart/cart.reducer';
import { CartState } from '../cart/cart.state';

export interface State {
    cart: CartState;
}

export const reducers: ActionReducerMap<State> = {
    cart: cartReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
