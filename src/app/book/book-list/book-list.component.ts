import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Book } from '../book';
import { BookStore } from '../book-store';

export interface RangeError {
    range: {
        reason: 'tooLow',
        currentValue: number,
        minValue: number
    } | {
        reason: 'tooHigh',
        currentValue: number,
        maxValue: number
    };
}

/**
 * @returns an error object like {range: {...}}
 */
export const rangeValidator: ValidatorFn = (control): RangeError => {

    const minValue = 5;
    const maxValue = 50;

    if (control.value == null) {
        return null;
    }

    if (control.value < minValue) {
        return {
            range: {
                reason: 'tooLow',
                currentValue: control.value,
                minValue
            }
        };
    }

    if (control.value > maxValue) {
        return {
            range: {
                reason: 'tooHigh',
                currentValue: control.value,
                maxValue
            }
        };
    }

    return null;

};

@Component({
    selector: 'wt-book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

    private _bookStore = new BookStore();

    bookForm = new FormGroup({
        title: new FormControl(null, [
            Validators.required,
            Validators.minLength(3)
        ]),
        price: new FormControl(null, [
            rangeValidator
        ]),
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
