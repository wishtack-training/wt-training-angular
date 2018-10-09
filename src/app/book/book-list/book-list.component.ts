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

        this._bookStore.addBook(new Book({
            title: 'eXtreme Programming Explained',
            price: 10
        }));

        this._bookStore.addBook(new Book({
            title: 'The Lean Startup',
            price: 31,
            authorName: 'Eric Ries'
        }));

    }

    addRandomBook() {
        this._bookStore.addBook(new Book({
            title: `Book number: ${Math.round(Math.random() * 100)}`
        }));
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
