import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Scavenger } from '@wishtack/rx-scavenger';
import { retryBackoff } from 'backoff-rxjs';
import { debounceTime, switchMap } from 'rxjs/operators';
import { Book } from '../book';
import { BookSearchService } from '../book-search.service';

@Component({
    selector: 'wt-book-search',
    templateUrl: './book-search.component.html',
    styleUrls: ['./book-search.component.scss']
})
export class BookSearchComponent implements OnInit, OnDestroy {

    keywordsControl = new FormControl();
    bookList: Book[];

    private _scavenger = new Scavenger(this);

    constructor(
        private _bookSearchService: BookSearchService
    ) {

    }

    ngOnInit() {

        const keywords$ = this.keywordsControl.valueChanges;

        keywords$
            .pipe(
                debounceTime(100),
                switchMap(keywords => this._bookSearchService.search(keywords)),
                retryBackoff(100),
                this._scavenger.collect()
            )
            .subscribe(bookList => this.bookList = bookList);

        this.keywordsControl.setValue('eXtreme Programming');

    }

    ngOnDestroy() {
    }
}
