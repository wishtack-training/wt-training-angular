import { Injectable } from '@angular/core';
import { Sandwich } from '../legacy-cart/sandwich';
import { CartStore } from './cart.store';

@Injectable({
    providedIn: 'root'
})
export class CartService {

    constructor(private cartStore: CartStore) {
    }

    addSandwich(sandwich: Sandwich) {
        this.cartStore.update(state => {
            return {
                ...state,
                sandwichList: [...state.sandwichList, sandwich]
            };
        });
    }

}
