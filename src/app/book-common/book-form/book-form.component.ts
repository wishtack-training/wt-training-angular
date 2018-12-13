import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Book } from '../../book-list-container/book';

@Component({
    selector: 'wt-book-form',
    templateUrl: './book-form.component.html',
    styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnChanges {

    @Input() book: Book;
    @Input() buttonLabel: string;
    @Output() bookChange: Observable<Book>;
    @Output() bookSubmit = new EventEmitter<Book>();

    bookForm = new FormGroup({
        title: new FormControl(),
        authorName: new FormControl()
    });

    constructor() {
        this.bookChange = this.bookForm.valueChanges
            .pipe(map(value => new Book(value)));
    }

    ngOnChanges(changes: SimpleChanges) {

        if (changes.book != null) {
            /* @hack forcing undefined instead of null if book is null. */
            this.bookForm.reset(this.book || undefined);
        }

    }

    submit() {
        const book = new Book(this.bookForm.value);
        this.bookSubmit.emit(book);
        this.bookForm.reset(undefined, {
            /* @hack do not trigger `bookChange`. */
            emitEvent: false
        });
    }

}
