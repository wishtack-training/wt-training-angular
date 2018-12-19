import { Component } from '@angular/core';
import { Book } from '../book';
import { BookStore } from '../book-store';

@Component({
    selector: 'wt-book-list-container',
    templateUrl: './book-list-container.component.html',
    styleUrls: ['./book-list-container.component.scss']
})
export class BookListContainerComponent {

    private _bookStore = new BookStore();

    addBook() {
        this._bookStore.addBook(new Book('eXtreme Programming Explained', 'Kent Beck'));
    }

    getBookList() {
        return this._bookStore.getBookList();
    }

    removeBook(book: Book) {
        this._bookStore.removeBook(book);
    }

}
