import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthorFormComponent } from '../../author/author-form/author-form.component';
import { Book } from '../book';


@Component({
    selector: 'wt-book-form',
    templateUrl: './book-form.component.html',
    styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {

    @Output() bookChange: Observable<Book>;
    @Output() bookSubmit = new EventEmitter<Book>();

    authorListControl = new FormArray([]);
    bookForm = new FormGroup({
        authorList: this.authorListControl,
        title: new FormControl()
    });
    isFavoriteAuthorSelectorDisplayed = false;

    constructor() {
        this.bookChange = this.bookForm.valueChanges
            .pipe(
                map(value => this._valueToBook(value))
            );
    }

    ngOnInit() {

        // this.bookForm.patchValue({
        //     title: 'test',
        //     authorList: [
        //         {
        //             age: 12,
        //             name: 'test'
        //         }
        //     ]
        // });

        const bookFormDataString = localStorage.getItem('bookForm');

        if (bookFormDataString != null) {
            this.bookForm.reset(JSON.parse(bookFormDataString));
        }

        this.bookForm.valueChanges
            .subscribe(value => {
                localStorage.setItem('bookForm', JSON.stringify(value))
            });

    }

    submitBook() {

        const book = this._valueToBook(this.bookForm.value);

        this.bookSubmit.emit(book);

        this.bookForm.reset();

    }

    addAuthor() {
        this.authorListControl.push(AuthorFormComponent.createAuthorFormGroup());
    }

    onAuthorSelect(author) {
        this.authorListControl.controls[0].patchValue(author);
        this.isFavoriteAuthorSelectorDisplayed = false;
    }

    private _valueToBook(value: any): Book {
        const author = value.authorList[0];
        return new Book({
            title: value.title,
            authorName: author ? author.name : null
        });
    }

}
