import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { Book } from './cart';

export interface CartState {
   books: Book[];
}

export function createInitialState(): CartState {
  return {
    books: []
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'cart' })
export class CartStore extends Store<CartState> {

  constructor() {
    super(createInitialState());
  }

}

