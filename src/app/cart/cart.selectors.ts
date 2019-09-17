import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CartState } from './cart.state';


export const cart = createFeatureSelector<CartState>('cart');

export const sandwichList = createSelector(cart, _cart => _cart.sandwichList);
