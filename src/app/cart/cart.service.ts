import { Injectable } from '@angular/core';
import { push } from '@datorama/akita';
import { Book } from '../book-shared/book';
import { CartStore } from './cart.store';

@Injectable({
    providedIn: 'root'
})
export class CartService {

    constructor(private _cartStore: CartStore) {
    }

    addBook(book: Book) {

        this._cartStore.setState(state => {
            return {
                bookList: push(state.bookList, book)
            };
        });

    }

}
