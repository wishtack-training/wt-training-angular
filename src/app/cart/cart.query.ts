import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Book } from '../book-comon/book';
import { CartState, CartStore } from './cart.store';

@Injectable({
    providedIn: 'root'
})
export class CartQuery extends Query<CartState> {

    bookList$: Observable<Book[]>;
    size$: Observable<number>;

    constructor(protected store: CartStore) {
        super(store);

        this.bookList$ = this.select(state => state.bookList);
        this.size$ = this.bookList$.pipe(map(bookList => bookList.length));
        
    }

}
