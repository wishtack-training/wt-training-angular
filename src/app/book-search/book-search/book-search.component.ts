import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { Scavenger } from '@wishtack/rx-scavenger';
import { BehaviorSubject, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, onErrorResumeNext, switchMap } from 'rxjs/operators';
import { Book } from '../../book-list-container/book';
import { CartService } from '../../cart/cart.service';
import { BookCatalog } from '../book-catalog.service';

@Component({
    selector: 'wt-book-search',
    templateUrl: './book-search.component.html',
    styleUrls: ['./book-search.component.scss']
})
export class BookSearchComponent implements OnChanges, OnDestroy, OnInit {

    @Input() keywords: string;
    @Output() keywordsChange = new EventEmitter<string>();

    keywords$ = new BehaviorSubject<string>(null);
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
                debounceTime(200),
                switchMap(keywords => {
                    return this._bookCatalog.search(keywords)
                        .pipe(
                            onErrorResumeNext()
                        );
                }),
                this._scavenger.collect()
            );

    }

    ngOnChanges(changes: SimpleChanges) {

        if (changes['keywords'] != null) {
            this.keywords$.next(this.keywords);
        }

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
        this.keywordsChange.emit(title);
    }
}
