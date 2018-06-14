import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn } from '@angular/forms';
import { Book } from '../book';

export const hasFirstNameOrLastName: ValidatorFn = (control) => {

    // if (!control.value.firstName && !control.value.lastName) {
    //     return {
    //         hasFirstNameOrLastName: true
    //     };
    // }

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
    selector: 'wt-book-form',
    templateUrl: './book-form.component.html',
    styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {

    @Output() bookSubmit = new EventEmitter<Book>();

    bookForm = createBookForm();

    constructor() {
    }

    ngOnInit() {
    }

    submitBook() {

        const book = new Book(this.bookForm.value);

        this.bookSubmit.emit(book);

        this.bookForm.reset();

    }
}
