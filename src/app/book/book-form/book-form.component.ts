import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Book } from '../book';

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

@Component({
    selector: 'wt-book-form',
    templateUrl: './book-form.component.html',
    styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent {

    @Output() bookSubmit = new EventEmitter<Book>();

    bookForm = new FormGroup({
        authorName: new FormControl(null, [
            Validators.required,
            isValidAuthorName
        ]),
        title: new FormControl()
    });

    submitBook() {

        const book = new Book(this.bookForm.value);

        this.bookSubmit.emit(book);

        this.bookForm.reset();

    }

}
