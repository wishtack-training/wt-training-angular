import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Book } from '../book';
import { BookStore } from '../book-store';

declare var require;

export const hasFirstNameOrLastName: ValidatorFn = (control) => {

    if (!control.value.firstName && !control.value.lastName) {
        return {
            hasFirstNameOrLastName: true
        };
    }

    return null;

};

export const createBookForm = () => {
    return new FormGroup({
        title: new FormControl(),
        description: new FormControl(),
        author: new FormGroup({
            firstName: new FormControl(),
            lastName: new FormControl()
        }, [
            hasFirstNameOrLastName
        ])
    });
};

@Component({
    selector: 'wt-book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

    bookForm = createBookForm();

    private _bookStore = new BookStore();

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

    addBook() {
        const book = new Book(this.bookForm.value);
        this._bookStore.addBook(book);
        this.bookForm.reset();
    }


    getBookList() {
        return this._bookStore.getBookList();
    }

    removeBook(book: Book) {
        this._bookStore.removeBook(book);
    }

}
