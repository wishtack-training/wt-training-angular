import { Injectable } from '@angular/core';
import { Sandwich } from '../cart/sandwich';
import { CartStore } from './cart.store';

@Injectable({providedIn: 'root'})
export class CartService {

  constructor(private _cartStore: CartStore) {
  }

  addSandwich(sandwich: Sandwich) {
    this._cartStore.update(state => {
      return {
        ...state,
        sandwichList: [...state.sandwichList, sandwich]
      };
    });
  }

}
