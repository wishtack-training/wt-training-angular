import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, switchMap } from 'rxjs/operators';
import { Book } from '../book';
import { GoogleBookRepository } from '../google-book-repository.service';

@Component({
    selector: 'wt-book-search',
    templateUrl: './book-search.component.html',
    styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent implements OnInit {

    bookList: Book[];
    keywordsControl = new FormControl();

    constructor(
        private _googleBookRepository: GoogleBookRepository
    ) {
    }

    ngOnInit() {

        this.keywordsControl.valueChanges
            .pipe(
                debounceTime(200),
                switchMap((keywords) => {
                    return this._googleBookRepository.searchBooks(keywords);
                })
            )
            .subscribe(bookList => {
                this.bookList = bookList;
            });

    }

}
