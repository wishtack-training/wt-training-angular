import { Injectable } from '@angular/core';
import { push } from '@datorama/akita';
import { Book } from '../book-comon/book';
import { CartStore } from './cart.store';

@Injectable({
    providedIn: 'root'
})
export class CartService {

    constructor(private _cartStore: CartStore) {
    }

    addBook(book: Book) {
        this._updateBookList(bookList => push(bookList, book));
    }

    removeBook(book: Book) {
        this._updateBookList(bookList => {
            return bookList.filter(_book => _book !== book);
        });
    }

    private _updateBookList(callback: (bookList: Book[]) => Book[]) {
        this._cartStore.update(state => {
            return {
                ...state,
                bookList: callback(state.bookList)
            };
        });
    }

}

