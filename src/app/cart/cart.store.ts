import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { Item } from '../item/item';

export interface CartState {
  itemList: Item[];
}

export function createInitialState(): CartState {
  return {
    itemList: []
  };
}

@Injectable({
  providedIn: 'root'
})
@StoreConfig({
  name: 'cart'
})
export class CartStore extends Store<CartState> {
  constructor() {
    super(createInitialState());
  }
}
