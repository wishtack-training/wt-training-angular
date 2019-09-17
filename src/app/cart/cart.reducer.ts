import { createReducer, on } from '@ngrx/store';
import { addSandwich } from './cart.actions';

export const cartReducer = createReducer(
    {
        sandwichList: []
    },
    on(addSandwich, (state, {sandwich}) => {
        return {
            sandwichList: [...state.sandwichList, sandwich]
        };
    })
);
