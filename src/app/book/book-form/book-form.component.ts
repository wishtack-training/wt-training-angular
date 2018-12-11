import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Book } from '../book';

@Component({
    selector: 'wt-book-form',
    templateUrl: './book-form.component.html',
    styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {

    @Output() bookSubmit = new EventEmitter<Book>();

    bookForm = new FormGroup({
        title: new FormControl(),
        authorName: new FormControl()
    });

    constructor() {
    }

    ngOnInit() {
    }

    submit() {
        const book = new Book(this.bookForm.value);
        this.bookSubmit.emit(book);
        this.bookForm.reset();
    }

}
