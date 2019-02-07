import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Book } from '../../book-shared/book';
import { BookSearchService } from '../book-search.service';

@Component({
    selector: 'wt-book-search',
    templateUrl: './book-search.component.html',
    styleUrls: ['./book-search.component.scss']
})
export class BookSearchComponent implements OnInit {

    bookList: Book[];
    keywordsControl = new FormControl();

    constructor(private _bookSearchService: BookSearchService) {
    }

    ngOnInit() {

        this.keywordsControl.valueChanges
            .subscribe(keywords => {

                /* 🤢 We'll improve this later. */
                this._bookSearchService.searchBooks(keywords)
                    .subscribe(bookList => {
                        this.bookList = bookList;
                    });

            });

    }

}
