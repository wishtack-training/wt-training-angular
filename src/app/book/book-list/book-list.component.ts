import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookStore } from '../book-store';

declare var require;



@Component({
    selector: 'wt-book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

    selectedBook: Book;

    private _bookStore;

    constructor(bookStore: BookStore) {
        this._bookStore = bookStore;
    }

    ngOnInit() {

        /* @TODO: maybe move this logic to a properties-loader or something like that. */
        const translation = require('raw-loader!./book-list.properties')
            .split('\n')
            .filter(line => line.length > 0)
            .reduce((result, line) => {
                const [key, value] = line.split('=');
                result[key] = value;
                return result;
            }, {});

    }

    addBook(book: Book) {
        this._bookStore.addBook(book);
    }

    getBookList() {
        return this._bookStore.getBookList();
    }

    removeBook(book: Book) {
        this._bookStore.removeBook(book);
    }

    selectBook(book: Book) {
        this.selectedBook = book;
    }

    replaceBook(selectedBook: Book, newBook: Book) {
        this._bookStore.replaceBook(selectedBook, newBook);
        this.selectedBook = null;
    }
}
