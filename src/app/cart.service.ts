import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Book } from './book/book';

@Injectable({
    providedIn: 'root'
})
export class CartService {

    private _bookList$ = new BehaviorSubject<Book[]>([]);

    readonly bookList$: Observable<Book[]>;
    readonly totalPrice$: Observable<number>;

    constructor() {

        this.bookList$ = this._bookList$.asObservable();

        this.totalPrice$ = this.bookList$
            .pipe(
                map(bookList => {

                    return bookList
                        .map(book => book.price || 15)
                        .reduce((result, value) => result + value, 0);
                })
            );

    }

    addBook(book: Book) {
        const bookList = [...this._bookList$.value, book];
        this._bookList$.next(bookList);
    }

}
