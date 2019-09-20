import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Sandwich } from '../cart/sandwich';
import { CartState, CartStore } from './cart.store';

@Injectable({providedIn: 'root'})
export class CartQuery extends Query<CartState> {

  sandwichList$: Observable<Sandwich[]>;
  totalPrice$: Observable<number>;

  constructor(protected store: CartStore) {
    super(store);
    this.sandwichList$ = this.select('sandwichList');
    this.totalPrice$ = this.sandwichList$
      .pipe(map(sandwichList => sandwichList.reduce((acc, sandwich) => acc + sandwich.price, 0)));
  }

}
