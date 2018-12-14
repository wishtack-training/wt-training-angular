import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Book } from '../book-list-container/book';
import { CartState, CartStore } from './cart.store';

@Injectable({providedIn: 'root'})
export class CartQuery extends Query<CartState> {

    bookList$: Observable<Book[]>;
    totalPrice$: Observable<number>;

    constructor(store: CartStore) {
        super(store);

        this.bookList$ = this.select(cart => cart.bookList);

        this.totalPrice$ = this.bookList$.pipe(map(bookList => {

            const initialPrice = 0;

            return bookList

            /* Some books might not have a price. */
            /* [{price: null}] => [] */
                .filter(book => book.price != null)

                .reduce((totalPrice, book) => {

                    return totalPrice + book.price.amount;

                }, initialPrice);

        }));

    }

}
