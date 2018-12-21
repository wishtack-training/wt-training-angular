
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Book } from '../book-comon/book';

/*
 * Store.
 */
@Injectable({
    providedIn: 'root'
})
export class CartService {

    /*
     * Queries.
     */

    bookList$: Observable<Book[]>;
    size$: Observable<number>;

    /*
     * State.
     */
    private _bookList$ = new BehaviorSubject<Book[]>([]);

    constructor() {
        this.bookList$ = this._bookList$.asObservable();
        this.size$ = this.bookList$
            .pipe(
                map(bookList => bookList.length)
            );
    }

    getBookList() {
        return this._bookList$.value;
    }

    /*
     * Actions.
     */

    addBook(book: Book) {
        this._updateBookList([...this.getBookList(), book]);
    }

    removeBook(book: Book) {
        const bookList = this.getBookList()
            .filter(_book => _book !== book);
        this._updateBookList(bookList);
    }

    private _updateBookList(bookList: Book[]) {
        this._bookList$.next(bookList);
    }

}
