import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { rangeValidator } from '../../../lib/range.validator';
import { Author } from '../../author/author';
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
        book: new FormGroup({
            title: new FormControl(null, [
                Validators.required,
                Validators.minLength(3)
            ]),
            price: new FormControl(null, [
                rangeValidator(5, 50)
            ])
        }),
        author: new FormGroup({
            name: new FormControl()
        })
    });

    ngOnInit() {
    }

    addBook() {

        const author = new Author(this.bookForm.value.author);

        const book = new Book({
            ...this.bookForm.value.book,
            author
        });

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
