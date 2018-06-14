import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EMPTY } from 'rxjs';
import { catchError, debounceTime, filter, map, mergeMap, retry, startWith, switchMap } from 'rxjs/operators';
import { Book } from '../book';
import { BookRepository } from '../book-repository';

@Component({
    selector: 'wt-book-search',
    templateUrl: './book-search.component.html',
    styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent implements OnInit {

    bookList: Book[];
    bookKeywordsControl = new FormControl();

    constructor(
        private _route: ActivatedRoute,
        private _bookRepository: BookRepository
    ) {
    }

    ngOnInit() {

        const keywords = this._route.snapshot.queryParamMap.get('keywords');

        this.bookKeywordsControl.valueChanges
            .pipe(
                startWith(keywords),
                debounceTime(200),
                filter(keywords => keywords !== ''),
                switchMap(keywords => {
                    return this._bookRepository.searchBooks(keywords)
                        .pipe(
                            catchError(() => EMPTY)
                        );
                })
            )
            .subscribe(bookList => {
                this.bookList = bookList;
            });

    }

}
