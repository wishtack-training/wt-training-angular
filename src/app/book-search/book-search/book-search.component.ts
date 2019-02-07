import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Scavenger } from '@wishtack/rx-scavenger';
import { retryBackoff } from 'backoff-rxjs';
import { switchMap } from 'rxjs/internal/operators/switchMap';
import { debounceTime, filter } from 'rxjs/operators';
import { Book } from '../../book-shared/book';
import { BookSearchService } from '../book-search.service';

@Component({
    selector: 'wt-book-search',
    templateUrl: './book-search.component.html',
    styleUrls: ['./book-search.component.scss']
})
export class BookSearchComponent implements OnDestroy, OnInit {

    bookList: Book[];
    keywordsControl = new FormControl();

    private _scavenger = new Scavenger(this);

    constructor(private _bookSearchService: BookSearchService) {
    }

    ngOnInit() {

        this.keywordsControl.valueChanges
            .pipe(
                debounceTime(100),
                filter(keywords => keywords != null && keywords.length > 0),
                switchMap(keywords => {
                    return this._bookSearchService.searchBooks(keywords);
                    // .pipe(
                    //     catchError(error => {
                    //         console.error(error);
                    //         return EMPTY;
                    //     })
                    // );
                }),
                retryBackoff(100),
                this._scavenger.collect()
            )
            .subscribe(bookList => {
                console.log(bookList);
            });

    }

    ngOnDestroy() {
    }

}
