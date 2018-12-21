import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Scavenger } from '@wishtack/rx-scavenger';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, onErrorResumeNext, switchMap } from 'rxjs/operators';
import { Book } from '../../../book-comon/book';
import { BookCatalog } from '../../../book-comon/book-catalog.service';
import { CartService } from '../../../cart/cart.service';

/**
 * @todo split route synchronization logic and search in two components
 * <wt-book-search-view> & <wt-book-search>
 * Ex.: <wt-book-search [keywords]="" (keywordsChange)="">
 */
@Component({
    selector: 'wt-book-search',
    templateUrl: './book-search-view.component.html',
    styleUrls: ['./book-search-view.component.scss']
})
export class BookSearchViewComponent implements OnDestroy, OnInit {

    keywordsControl = new FormControl();
    bookList: Book[];
    bookList$: Observable<Book[]>;

    private _keywords$: Observable<string>;
    private _scavenger = new Scavenger(this);

    constructor(
        private _activatedRoute: ActivatedRoute,
        private _bookCatalog: BookCatalog,
        private _cart: CartService,
        private _router: Router
    ) {

        this._keywords$ = this._activatedRoute.queryParamMap
            .pipe(
                map(queryParamMap => queryParamMap.get('keywords'))
            );

        this.bookList$ = this._keywords$
            .pipe(
                debounceTime(100),
                distinctUntilChanged(),
                switchMap(keywords => {
                    return this._bookCatalog.search(keywords)
                        .pipe(onErrorResumeNext());
                })
            );
    }

    ngOnInit() {

        console.warn('something something...');

        /* Syncing query params with form. */
        this._keywords$
            .pipe(this._scavenger.collect())
            .subscribe(keywords => this.keywordsControl.setValue(keywords));

        /* Syncing form with query params. */
        this.keywordsControl.valueChanges
            .pipe(this._scavenger.collect())
            .subscribe(keywords => {
                this._router.navigate(['/book', 'search'], {
                    queryParams: {
                        keywords
                    }
                });
            });

        /* Subscribe to bookList. */
        this.bookList$
            .pipe(this._scavenger.collect())
            .subscribe(bookList => this.bookList = bookList);

    }

    ngOnDestroy() {
    }

    buyBook(book: Book) {
        this._cart.addBook(book);
    }

}
