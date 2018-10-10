import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { rangeValidator } from '../../../lib/range.validator';
import { Book } from '../book';

@Component({
    selector: 'wt-book-form',
    templateUrl: './book-form.component.html',
    styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnChanges, OnInit {

    @Input() book: Book;
    @Input() buttonLabel: string;
    @Output() bookSubmit = new EventEmitter<Book>();

    bookForm = new FormGroup({
        title: new FormControl(null, [
            Validators.required,
            Validators.minLength(3)
        ]),
        price: new FormControl(null, [
            rangeValidator(5, 50)
        ]),
        author: new FormGroup({
            name: new FormControl()
        })
    });

    previewBook: Book;
    shouldShowPreview: boolean;

    ngOnInit() {

        this.bookForm.valueChanges.subscribe(value => {
            this.previewBook = new Book(value);
        });

    }

    ngOnChanges(changes: SimpleChanges) {

        if (changes.book != null) {
            /* @HACK: Making sure that `reset()` is never call with `null`. */
            this.bookForm.reset(this.book !== null ? this.book : undefined);
        }

    }

    submitBook() {

        const book = new Book(this.bookForm.value);

        this.bookSubmit.emit(book);

        this.bookForm.reset();
        this.previewBook = null;

    }

}
