import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Book } from '../book-list-container/book';

export interface Cart {
    bookList: Book[];
}

export function getInitialCart(): Cart {
    return {
        bookList: []
    };
}

@Injectable({
    providedIn: 'root'
})
export class CartService {

    bookList$: Observable<Book[]>;
    totalPrice$: Observable<number>;

    private _cart$ = new BehaviorSubject<Cart>(getInitialCart());

    constructor() {
        this.bookList$ = this._cart$.pipe(map(cart => cart.bookList));
    }

    addBook(book: Book) {
        this._patchCart({
            bookList: [...this._bookList, book]
        });
    }

    removeBook(bookId: string) {
        throw new Error('😱 Not implemented yet!');
    }

    private get _cart() {
        return this._cart$.value;
    }

    private get _bookList() {
        return this._cart.bookList;
    }

    private _patchCart(cartData: Partial<Cart>) {
        this._cart$.next({
            ...this._cart,
            ...cartData
        });
    }
}
