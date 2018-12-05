import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Book } from '../book';

export interface BookFormConfig {
    title?: string;
    titleFontSize?: number;
    titleStyle?: any;
    useH2ForTitle?: boolean;
}

@Component({
    selector: 'wt-book-form',
    templateUrl: './book-form.component.html',
    styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {

    @Input() config: BookFormConfig;
    @Output() bookSubmit = new EventEmitter<Book>();

    bookForm = new FormGroup({
        authorName: new FormControl(),
        title: new FormControl()
    });

    constructor() {
    }

    ngOnInit() {
    }

    submitBook() {

        const book = new Book(this.bookForm.value);

        this.bookSubmit.emit(book);

        this.bookForm.reset();

    }

}
