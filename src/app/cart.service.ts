import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Book } from './book/book';

@Injectable({
    providedIn: 'root'
})
export class CartService {

    readonly totalPrice$ = this.bookList$
        .pipe(
            map(bookList => {

                return bookList
                    .map(book => book.price || 15)
                    .reduce((result, value) => result + value, 0);
            })
        );
    private _bookList$ = new BehaviorSubject<Book[]>([]);
    readonly bookList$ = this._bookList$.asObservable();

    addBook(book: Book) {
        const bookList = [...this._bookList$.value, book];
        this._bookList$.next(bookList);
    }

}
