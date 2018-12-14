import { Injectable } from '@angular/core';
import { push } from '@datorama/akita';
import { Book } from '../book-list-container/book';
import { CartStore } from './cart.store';

@Injectable({providedIn: 'root'})
export class CartService {

    constructor(private _cartStore: CartStore) {
    }

    addBook(book: Book) {

        this._updateBookList(bookList => {
            return push(bookList, book);
        });

    }

    private _updateBookList(callback: (bookList: Book[]) => Book[]) {
        this._cartStore.update(cart => {
            return {
                bookList: callback(cart.bookList)
            };
        });
    }

}
