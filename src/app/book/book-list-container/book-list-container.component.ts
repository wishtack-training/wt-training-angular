import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookFormConfig } from '../book-form/book-form.component';
import { BookStore } from '../book-store';

@Component({
    selector: 'wt-book-list-container',
    templateUrl: './book-list-container.component.html',
    styleUrls: ['./book-list-container.component.scss']
})
export class BookListContainerComponent implements OnInit {

    bookFormConfig: BookFormConfig = {
        title: 'Add Book',
        titleStyle: {
            color: '#7757f3'
        },
        useH2ForTitle: true
    };

    private _bookStore = new BookStore();

    ngOnInit() {
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

}
