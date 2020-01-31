import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { map } from 'rxjs/operators';
import { CartStore, CartState } from './cart.store';

@Injectable({
  providedIn: 'root'
})
export class CartQuery extends Query<CartState> {

  bookList$ = this.select('books');
  totalPrice$ = this.select('books').pipe(
    map(books => {
      return books
        .map(book => book.price)
        .filter(price => price != null)
        .reduce((acc, price) => acc + price, 0);
    })
  );

  constructor(protected store: CartStore) {
    super(store);
  }
}
