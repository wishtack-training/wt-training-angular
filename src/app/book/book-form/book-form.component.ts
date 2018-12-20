import { Component, EventEmitter, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { AuthorFormComponent } from '../../author/author-form/author-form.component';
import { Book } from '../book';


@Component({
    selector: 'wt-book-form',
    templateUrl: './book-form.component.html',
    styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent {

    @Output() bookSubmit = new EventEmitter<Book>();

    authorListControl = new FormArray([]);
    bookForm = new FormGroup({
        authorList: this.authorListControl,
        title: new FormControl()
    });

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
