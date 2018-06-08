/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Book } from '../book/book';

@Injectable({
    providedIn: 'root'
})
export class BookCart {

    private _bookListSubject$ = new BehaviorSubject([]);

    constructor() {

        const data = localStorage.getItem('cart');

        if (data != null) {
            this._bookListSubject$.next(JSON.parse(data));
        }

    }

    get bookList$() {
        return this._bookListSubject$.asObservable();
    }

    addBook(book: Book) {

        const bookList = this._bookListSubject$.value;
        this._updateBookList([...bookList, book]);

    }

    private _updateBookList(bookList: Book[]) {
        this._bookListSubject$.next(bookList);
        localStorage.setItem('cart', JSON.stringify(bookList));
    }
}
