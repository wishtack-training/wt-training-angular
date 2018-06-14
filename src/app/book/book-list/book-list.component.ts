import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Book } from '../book';
import { BookStore } from '../book-store';

declare var require;

@Component({
    selector: 'wt-book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

    private _bookStore = new BookStore();

    titleControl = new FormControl(null, [
        Validators.required,
        Validators.minLength(3)
    ]);

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

        const title = this.titleControl.value;
        this._bookStore.addBook(new Book(title));
        this.titleControl.reset();
    }

    getBookList() {
        return this._bookStore.getBookList();
    }

    removeBook(book: Book) {
        this._bookStore.removeBook(book);
    }

}
