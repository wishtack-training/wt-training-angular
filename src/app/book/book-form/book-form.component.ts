import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { AuthorFormComponent } from '../../author/author-form/author-form.component';
import { Book } from '../book';


@Component({
    selector: 'wt-book-form',
    templateUrl: './book-form.component.html',
    styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {

    @Output() bookSubmit = new EventEmitter<Book>();

    authorListControl = new FormArray([]);
    bookForm = new FormGroup({
        authorList: this.authorListControl,
        title: new FormControl()
    });

    ngOnInit() {

        this.addAuthor();

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

        const author = this.bookForm.value.authorList[0];

        const book = new Book({
            title: this.bookForm.value.title,
            authorName: author ? author.name : null
        });

        this.bookSubmit.emit(book);

        this.bookForm.reset();

    }

    addAuthor() {
        this.authorListControl.push(AuthorFormComponent.createAuthorFormGroup());
    }
}
