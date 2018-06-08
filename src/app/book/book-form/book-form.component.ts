import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthorFormComponent } from '../../author/author-form/author-form.component';
import { Book } from '../book';
import { validUrl } from '../../../lib/valid-url.validator';

@Component({
    selector: 'wt-book-form',
    templateUrl: './book-form.component.html',
    styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {

    @Output() bookSubmit = new EventEmitter<Book>();

    bookForm = new FormGroup({
        title: new FormControl(null, [
            Validators.required,
            Validators.minLength(3)
        ]),
        pictureUrl: new FormControl(null, [
            validUrl
        ]),
        authorList: new FormArray([])
    });

    constructor() {
    }

    ngOnInit() {
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

    addAuthorControl() {
        const authorListControl = this.bookForm.get('authorList') as FormArray;
        authorListControl.push(AuthorFormComponent.createFormGroup());
    }

    submitBook() {
        const book = new Book(this.bookForm.value);
        this.bookSubmit.emit(book);
    }
}
