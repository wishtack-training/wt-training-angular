import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Scavenger } from '@wishtack/rx-scavenger';
import { interval, Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, switchMap } from 'rxjs/operators';
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
    time$ = interval(1000)
        .pipe(map(() => new Date()));

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
