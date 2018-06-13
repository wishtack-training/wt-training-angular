import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookStore } from '../book-store';

@Component({
    selector: 'wt-book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

    private _bookStore = new BookStore();

    ngOnInit() {
        this._bookStore.addBook(
            new Book('A')
        );
    }

    addBook() {
        this._bookStore.addBook(new Book('Hello!'));
    }

    getBookList() {
        return this._bookStore.getBookList();
    }

    removeBook(book: Book) {
        this._bookStore.removeBook(book);
    }

}
