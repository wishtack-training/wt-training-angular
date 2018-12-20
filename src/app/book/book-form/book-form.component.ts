import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Book } from '../book';

@Component({
    selector: 'wt-book-form',
    templateUrl: './book-form.component.html',
    styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent {

    @Output() bookSubmit = new EventEmitter<Book>();

    bookForm = new FormGroup({
        authorName: new FormControl(),
        title: new FormControl()
    });

    submitBook() {

        const book = new Book(this.bookForm.value);

        this.bookSubmit.emit(book);

        this.bookForm.reset();

    }

}
