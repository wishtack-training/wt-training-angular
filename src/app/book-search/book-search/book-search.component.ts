import { Component, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Scavenger } from '@wishtack/rx-scavenger';
import { retryBackoff } from 'backoff-rxjs';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/internal/operators/switchMap';
import { debounceTime, filter } from 'rxjs/operators';
import { Book } from '../../book-shared/book';
import { BookSearchService } from '../book-search.service';

@Component({
    selector: 'wt-book-search',
    templateUrl: './book-search.component.html',
    styleUrls: ['./book-search.component.scss']
})
export class BookSearchComponent implements OnChanges, OnDestroy, OnInit {

    @Input() keywords: string;
    @Output() keywordsChange: Observable<string>;

    bookList: Book[];
    keywordsControl = new FormControl();
    keywords$: Observable<string>;

    private _scavenger = new Scavenger(this);

    constructor(private _bookSearchService: BookSearchService) {
        this.keywords$ = this.keywordsControl.valueChanges;
        this.keywordsChange = this.keywords$;
    }

    ngOnInit() {

        this.keywords$
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
            .subscribe(bookList => this.bookList = bookList);

    }

    ngOnChanges(changes: SimpleChanges) {

        if (changes.keywords != null) {
            this.keywordsControl.setValue(this.keywords);
        }

    }

    ngOnDestroy() {
    }

}
