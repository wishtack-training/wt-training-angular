import { Component } from '@angular/core';
import { Book } from '../book';
import { BookStore } from '../book-store';

@Component({
    selector: 'wt-book-list-container',
    templateUrl: './book-list-container.component.html',
    styleUrls: ['./book-list-container.component.scss']
})
export class BookListContainerComponent {

    editedBook: Book = null;

    private _bookStore = new BookStore();

    addBook(book: Book) {
        this._bookStore.addBook(book);
    }

    replaceEditedBook(book: Book) {
        this._bookStore.replaceBook(this.editedBook, book);
        this.editedBook = null;
    }

    editBook(book: Book) {
        this.editedBook = book;
    }

    getBookList() {
        return this._bookStore.getBookList();
    }

    removeBook(book: Book) {
        this._bookStore.removeBook(book);
    }
}
