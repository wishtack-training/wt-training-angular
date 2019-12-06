import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { map, shareReplay } from 'rxjs/operators';
import { CartState, CartStore } from './cart.store';

@Injectable({
  providedIn: 'root'
})
export class CartQuery extends Query<CartState> {
  itemList$ = this.select('itemList');
  totalPrice$ = this.itemList$.pipe(map(itemList => {
    return itemList.reduce((acc, item) => acc + item.price, 0);
  }), shareReplay(1));
  isEmpty$ = this.itemList$.pipe(map(itemList => itemList.length === 0));

  constructor(protected store: CartStore) {
    super(store);
  }
}
