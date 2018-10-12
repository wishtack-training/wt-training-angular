import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Scavenger } from '@wishtack/rx-scavenger';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Book } from '../book';
import { GoogleBookRepository } from '../google-book-repository.service';

@Component({
    selector: 'wt-book-search',
    templateUrl: './book-search.component.html',
    styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent implements OnDestroy, OnInit {

    bookList: Book[];
    keywordsControl = new FormControl();

    private _bookList$: Observable<Book[]>;
    private _keywords$: Observable<string>;
    private _scavenger = new Scavenger(this);

    constructor(
        private _googleBookRepository: GoogleBookRepository
    ) {

        this._keywords$ = this.keywordsControl.valueChanges
            .pipe(
                debounceTime(200),
                distinctUntilChanged()
            );

        this._bookList$ = this._keywords$
            .pipe(
                switchMap(keywords => {
                    return this._googleBookRepository.searchBooks(keywords);
                })
            );
    }

    ngOnInit() {

        this._bookList$
            .pipe(
                this._scavenger.collect()
            )
            .subscribe((bookList) => {
                this.bookList = bookList;
            });

    }

    ngOnDestroy() {
    }

}
