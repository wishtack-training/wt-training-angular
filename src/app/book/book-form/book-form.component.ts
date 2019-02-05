import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Book } from '../book';

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
        price: new FormControl()
    });

    onBookSubmit() {

        const book = new Book(this.bookForm.value);

        this.bookSubmit.emit(book);

        this.bookForm.reset();

    }

}
