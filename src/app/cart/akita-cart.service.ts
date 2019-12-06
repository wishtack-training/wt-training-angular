import { Injectable } from '@angular/core';
import { Item } from '../item/item';
import { CartStore } from './cart.store';

@Injectable({
  providedIn: 'root'
})
export class AkitaCartService {
  constructor(private _cartStore: CartStore) {
  }

  addItem(item: Item) {
    this._cartStore.update(state => {
      return {
        ...state,
        itemList: [...state.itemList, item]
      };
    });
  }

}
