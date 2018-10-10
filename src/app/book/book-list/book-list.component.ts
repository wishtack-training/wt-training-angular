import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookStore } from '../book-store';

@Component({
    selector: 'wt-book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

    selectedBook: Book = null;

    private _bookStore = new BookStore();

    ngOnInit() {
    }

    getBookList() {
        return this._bookStore.getBookList();
    }

    addBook(book: Book) {
        this._bookStore.addBook(book);
    }

    replaceBook(book: Book) {
        this._bookStore.replaceBook(this.selectedBook, book);
        this.selectedBook = null;
    }

    removeBook(book: Book) {
        this._bookStore.removeBook(book);
    }

    selectBook(book: Book) {
        this.selectedBook = book;
    }
}
