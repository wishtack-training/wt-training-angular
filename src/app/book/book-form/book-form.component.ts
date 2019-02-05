import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Book } from '../book';


export const isIsbnValid = (isbn: string) => {

    const length = isbn.replace(/-/g, '').length;

    return length >= 10 && length <= 13;

};

export const isbnValidator: ValidatorFn = (control) => {

    const isbn = control.value;

    if (isbn == null) {
        return null;
    }

    if (isbn.length === 0) {
        return null;
    }

    if (!isIsbnValid(isbn)) {
        return {
            isbn: true
        };
    }

};

@Component({
    selector: 'wt-book-form',
    templateUrl: './book-form.component.html',
    styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent {

    @Output() bookSubmit = new EventEmitter<Book>();

    bookForm = new FormGroup({
        title: new FormControl(null, [
            Validators.required,
            Validators.minLength(3)
        ]),
        author: new FormControl(),
        isbn: new FormControl(null, [
            isbnValidator
        ]),
        price: new FormControl()
    });

    onBookSubmit() {

        const book = new Book(this.bookForm.value);

        this.bookSubmit.emit(book);

        this.bookForm.reset();

    }

}
