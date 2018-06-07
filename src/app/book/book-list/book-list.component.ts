import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Book } from '../book';
import { BookRepository } from '../book-repository';

export const validUrl: ValidatorFn = (control) => {

    if (control.value == null || control.value === '') {
        return null;
    }

    if (!control.value.startsWith('https://')) {
        return {
            validUrl: {
                url: control.value
            }
        };
    }

    return null;
};

@Component({
    selector: 'wt-book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

    bookForm = new FormGroup({
        title: new FormControl(null, [
            Validators.required,
            Validators.minLength(3)
        ]),
        pictureUrl: new FormControl(null, [
            validUrl
        ])
    });
    bookList: Book[];

    constructor(private _bookRepository: BookRepository) {
    }

    ngOnInit() {
        this.bookList = this._bookRepository.getBookList();
    }

    addBook() {
        const book = new Book(this.bookForm.value);
        this.bookList = [...this.bookList, book];
        this.bookForm.reset();
    }

    getErrorMessageList() {

        return Object.entries(this.bookForm.controls)
            .filter(([name, control]) => {
                return control.touched && control.errors != null;
            })
            .map(([name, control]) => {

                if (control.hasError('validUrl')) {
                    const url = control.getError('validUrl').url;
                    return `${name} is invalid because '${url}' doesn't match our needs.`;
                }

                if (control.hasError('required')) {
                    return `${name} is required.`;
                }

                return `${name} is invalid.`;

            });

    }
}
