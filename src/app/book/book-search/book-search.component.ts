import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { tap } from 'rxjs/operators';
import { Book } from '../book';
import { BookRepository } from '../book-repository';
import { GoogleBookListResponse } from '../google-book-list-response';


@Component({
    selector: 'wt-book-search',
    templateUrl: './book-search.component.html',
    styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent implements OnInit {

    bookFormGroup = new FormGroup({
        title: new FormControl()
    });
    bookList: Book[];

    constructor(private _bookRepository: BookRepository) {
    }

    ngOnInit() {
    }

    searchBook() {

        const title = this.bookFormGroup.value.title;

        this._bookRepository.searchBookList(title)
            .subscribe(bookList => this.bookList = bookList);

    }

}
