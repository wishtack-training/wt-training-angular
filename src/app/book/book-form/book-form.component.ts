import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { rangeValidator } from '../../../lib/range.validator';
import { Author } from '../../author/author';
import { Book } from '../book';

@Component({
    selector: 'wt-book-form',
    templateUrl: './book-form.component.html',
    styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {

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
    previewBook: Book;

    ngOnInit() {

        this.bookForm.valueChanges.subscribe(value => {
            this.previewBook = new Book({...value.previewBook, author: value.author});
        });

    }

    submitBook() {

        const author = new Author(this.bookForm.value.author);

        const book = new Book({
            ...this.bookForm.value.previewBook,
            author
        });

        this.bookSubmit.emit(book);

        this.bookForm.reset();
        this.previewBook = null;

    }

}
