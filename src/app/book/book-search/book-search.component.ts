import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { EMPTY } from 'rxjs';
import { catchError, debounceTime, filter, map, mergeMap, retry, switchMap } from 'rxjs/operators';
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

    constructor(private _bookRepository: BookRepository) {
    }

    async ngOnInit() {

        this.bookKeywordsControl.valueChanges
            .pipe(
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
