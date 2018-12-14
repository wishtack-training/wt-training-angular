import { Component, OnDestroy, OnInit } from '@angular/core';
import { Scavenger } from '@wishtack/rx-scavenger';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, onErrorResumeNext, switchMap } from 'rxjs/operators';
import { Book } from '../../book-list-container/book';
import { CartService } from '../../cart/cart.service';
import { BookCatalog } from '../book-catalog.service';

@Component({
    selector: 'wt-book-search',
    templateUrl: './book-search.component.html',
    styleUrls: ['./book-search.component.scss']
})
export class BookSearchComponent implements OnDestroy, OnInit {

    keywords$ = new Subject<string>();
    bookList: Book[];

    private _bookList$: Observable<Book[]>;
    private _scavenger = new Scavenger(this);

    constructor(
        private _bookCatalog: BookCatalog,
        private _cartService: CartService
    ) {

        this._bookList$ = this.keywords$
            .pipe(
                distinctUntilChanged(),
                debounceTime(100),
                switchMap(keywords => {
                    return this._bookCatalog.search(keywords)
                        .pipe(
                            onErrorResumeNext()
                        );
                }),
                this._scavenger.collect()
            );

    }

    ngOnInit() {
        this._bookList$.subscribe(bookList => this.bookList = bookList);
    }

    ngOnDestroy() {
    }

    buy(book: Book) {
        this._cartService.addBook(book);
    }

    search({title}: { title: string }) {
        this.keywords$.next(title);
    }
}
