import { Component, OnInit } from '@angular/core';
import { Book } from '../book';

@Component({
    selector: 'wt-book-list-container',
    templateUrl: './book-list-container.component.html',
    styleUrls: ['./book-list-container.component.scss']
})
export class BookListContainerComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

    addBook(book: Book) {
        throw new Error('😱 Not implemented yet!');
    }

    getBookList() {
        throw new Error('😱 Not implemented yet!');
    }

    removeBook(book: Book) {
        throw new Error('😱 Not implemented yet!');
    }

}
