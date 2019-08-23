import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { Sandwich } from '../legacy-cart/sandwich';

export interface CartState {
    sandwichList: Sandwich[];
}

export function createInitialState(): CartState {
    return {
        sandwichList: []
    };
}

@Injectable({
    providedIn: 'root'
})
@StoreConfig({name: 'cart'})
export class CartStore extends Store<CartState> {

    constructor() {
        super(createInitialState());
    }

}

