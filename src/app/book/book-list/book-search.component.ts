import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Scavenger } from '@wishtack/rx-scavenger';
import { debounceTime, startWith, switchMap } from 'rxjs/operators';
import { Book } from '../book';
import { BookRepository } from '../book-repository';

export interface GoogleBookSearchResponse {
    items: Array<{
        volumeInfo: {
            title: string;
            imageLinks: {
                thumbnail: string;
            }
        }
    }>;
}

@Component({
    selector: 'wt-book-search',
    templateUrl: './book-search.component.html',
    styleUrls: ['./book-search.component.scss']
})
export class BookSearchComponent implements OnDestroy, OnInit {

    bookList: Book[];
    keywordsControl = new FormControl();

    private _scavenger = new Scavenger(this);

    constructor(private _bookRepository: BookRepository) {
    }

    ngOnInit() {

        const bookList$ = this.keywordsControl.valueChanges
            .pipe(
                startWith('eXtreme Programming'),
                debounceTime(200),
                switchMap(keywords => this._bookRepository.searchBooks(keywords)),
                this._scavenger.collect()
            );

        bookList$.subscribe(bookList => this.bookList = bookList);

    }

    ngOnDestroy() {
    }

}
