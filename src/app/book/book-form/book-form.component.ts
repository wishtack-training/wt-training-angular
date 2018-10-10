import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { rangeValidator } from '../../../lib/range.validator';
import { Author } from '../../author/author';
import { Book } from '../book';

@Component({
    selector: 'wt-book-form',
    templateUrl: './book-form.component.html',
    styleUrls: ['./book-form.component.css']
})
export class BookFormComponent {

    @Output() bookSubmit = new EventEmitter<Book>();

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

    submitBook() {

        const author = new Author(this.bookForm.value.author);

        const book = new Book({
            ...this.bookForm.value.book,
            author
        });

        this.bookSubmit.emit(book);

        this.bookForm.reset();

    }

}
