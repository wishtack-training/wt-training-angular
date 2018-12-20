import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Book } from '../book';

export function isNullOrEmpty(value: string) {

    if (value == null) {
        return true;
    }

    return value.length > 0;

}

export const isValidAuthorName: ValidatorFn = (control): null | {
    invalidAuthor?: {
        reason: string;
    }
} => {

    if (control.value == null) {
        return null;
    }

    if (control.value.toLowerCase().includes('younes')) {
        return {
            invalidAuthor: {
                reason: `"younes" is a forbidden author!`
            }
        };
    }

    return null;

};

export const ageOrBirthYearRequired: ValidatorFn = (control) => {

    if (isNullOrEmpty(control.value.age)
        && isNullOrEmpty(control.value.birthYear)) {
        return {
            ageOrBirthYearRequired: true
        };
    }

    return null;
};

export const any = (fieldList: string[]): ValidatorFn => (control) => {

    const value = fieldList
        .map(field => control.value[field])
        .find(_value => !isNullOrEmpty(_value));

    if (value === undefined) {
        return {
            any: true
        };
    }

    return null;

};

export function createAuthorFormGroup() {
    return new FormGroup({
        age: new FormControl(),
        birthYear: new FormControl(),
        name: new FormControl(null, [
            Validators.required,
            isValidAuthorName
        ])
    }, [
        any(['age', 'birthYear'])
    ]);
}

@Component({
    selector: 'wt-book-form',
    templateUrl: './book-form.component.html',
    styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent {

    @Output() bookSubmit = new EventEmitter<Book>();

    bookForm = new FormGroup({
        author: createAuthorFormGroup(),
        title: new FormControl()
    });

    submitBook() {

        const book = new Book({
            title: this.bookForm.value.title,
            authorName: this.bookForm.value.author.name
        });

        this.bookSubmit.emit(book);

        this.bookForm.reset();

    }

}
