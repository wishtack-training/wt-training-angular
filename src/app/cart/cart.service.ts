import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter, map, pairwise } from 'rxjs/operators';
import { Book } from '../book/book';

@Injectable({
    providedIn: 'root'
})
export class Cart {

    private _bookList$ = new BehaviorSubject<Book[]>([]);

    get bookList$() {
        return this._bookList$.asObservable();
    }

    get bookList() {
        return this._bookList$.value;
    }

    get bookCount$() {
        return this.bookList$
            .pipe(
                map(bookList => bookList.length)
            );
    }

    get onBookAdd$(): Observable<void> {

        return this.bookCount$
            .pipe(
                pairwise(),
                filter(data => {
                    const [previousValue, currentValue] = data;
                    return currentValue > previousValue;
                }),
                map(() => null),
            );

    }

    addBook(book: Book) {
        this._bookList$.next([...this.bookList, book]);
    }

    removeBook(book: Book) {
        const bookList = this.bookList
            .filter(_book => _book !== book);
        this._bookList$.next(bookList);
    }

    reset() {
        this._bookList$.next([]);
    }

}
