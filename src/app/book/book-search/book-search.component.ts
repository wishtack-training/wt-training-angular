import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Scavenger } from '@wishtack/rx-scavenger';
import { EMPTY, from, Observable, Subscription } from 'rxjs';
import { debounceTime, map, onErrorResumeNext, retry, switchMap } from 'rxjs/operators';
import { Book } from '../book';
import { BookRepository, ListResponse } from '../book-repository.service';
import { OnDestroy } from '@angular/core';

@Component({
    selector: 'wt-book-search',
    templateUrl: './book-search.component.html',
    styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent implements OnDestroy, OnInit {

    bookCount: number;
    bookList: Book[];
    keywordsControl = new FormControl();

    private _scavenger = new Scavenger(this);

    constructor(
        private _bookRepository: BookRepository
    ) {
    }

    ngOnInit() {

        const bookListResponse$ = this.keywordsControl.valueChanges
            .pipe(
                debounceTime(100),
                switchMap(keywords => {
                    return this._bookRepository.searchBooks(keywords)
                        .pipe(
                            retry(3),
                            onErrorResumeNext(from([]))
                        );
                }),
                this._scavenger.collect()
            );

        bookListResponse$.subscribe(bookListResponse => {
            this.bookCount = bookListResponse.totalCount;
            this.bookList = bookListResponse.itemList;
        });

    }

    ngOnDestroy() {
    }

}
