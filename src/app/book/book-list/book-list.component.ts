import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookRepository } from '../book-repository';

@Component({
    selector: 'wt-book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

    bookList: Book[];

    constructor(private _bookRepository: BookRepository) {
    }

    ngOnInit() {
        this.bookList = this._bookRepository.getBookList();
    }

}
