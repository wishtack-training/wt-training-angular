import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Book } from '../book';

@Component({
    selector: 'wt-book-form',
    templateUrl: './book-form.component.html',
    styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnChanges {

    @Input() book: Book;
    @Input() buttonLabel: string;
    @Output() bookSubmit = new EventEmitter<Book>();

    bookForm = new FormGroup({
        title: new FormControl(),
        authorName: new FormControl()
    });

    ngOnChanges(changes: SimpleChanges) {

        if (changes.book != null) {
            /* @hack forcing undefined instead of null if book is null. */
            this.bookForm.reset(this.book || undefined);
        }
        
    }

    submit() {
        const book = new Book(this.bookForm.value);
        this.bookSubmit.emit(book);
        this.bookForm.reset();
    }

}
