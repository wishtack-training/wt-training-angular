import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Scavenger } from '@wishtack/rx-scavenger';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, onErrorResumeNext, switchMap } from 'rxjs/operators';
import { Book } from '../../book-comon/book';
import { CartService } from '../../cart/cart.service';
import { BookCatalog } from '../book-catalog.service';

@Component({
    selector: 'wt-book-search',
    templateUrl: './book-search.component.html',
    styleUrls: ['./book-search.component.scss']
})
export class BookSearchComponent implements OnDestroy, OnInit {

    keywordsControl = new FormControl();
    bookList: Book[];
    bookList$: Observable<Book[]>;

    private _scavenger = new Scavenger(this);

    constructor(
        private _bookCatalog: BookCatalog,
        private _cart: CartService
    ) {
        this.bookList$ = this.keywordsControl.valueChanges
            .pipe(
                debounceTime(100),
                distinctUntilChanged(),
                switchMap(keywords => {
                    return this._bookCatalog.search(keywords)
                        .pipe(onErrorResumeNext());
                })
            );
    }

    async ngOnInit() {

        this.bookList$
            .pipe(this._scavenger.collect())
            .subscribe(bookList => this.bookList = bookList);

        this.keywordsControl.setValue('eXtreme Programming');

    }

    ngOnDestroy() {
    }

    buyBook(book: Book) {
        this._cart.addBook(book);
    }

}
