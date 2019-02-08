import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { CartState, CartStore } from './cart.store';

@Injectable({
    providedIn: 'root'
})
export class CartQuery extends Query<CartState> {

    constructor(protected store: CartStore) {
        super(store);
    }

}
