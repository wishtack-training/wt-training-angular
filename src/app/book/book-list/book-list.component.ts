import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Book } from '../book';
import { BookStore } from '../book-store';

@Component({
    selector: 'wt-book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

    private _bookStore = new BookStore();

    bookForm = new FormGroup({
        title: new FormControl(),
        price: new FormControl(),
        authorName: new FormControl()
    });

    ngOnInit() {
    }

    addBook() {
        const book = new Book(this.bookForm.value);
        this._bookStore.addBook(book);
        this.bookForm.reset();
    }

    getBookList() {
        return this._bookStore.getBookList();
    }

    getAuthorPictureUrl(authorName: string) {

        if (authorName == null) {
            return null;
        }

        return `https://robohash.org/${authorName}`;

    }

    removeBook(book: Book) {
        this._bookStore.removeBook(book);
    }
}
