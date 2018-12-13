import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../../book-list-container/book';

@Component({
    selector: 'wt-book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.scss']
})
export class BookListComponent {

    @Input() editedBook: Book;
    @Input() bookList: Book[];
    @Output() bookEdit = new EventEmitter<Book>();
    @Output() bookSubmit = new EventEmitter<Book>();
    @Output() bookRemove = new EventEmitter<Book>();

    editBook(book: Book) {
        this.bookEdit.emit(book);
    }

    removeBook(book: Book) {
        this.bookRemove.emit(book);
    }

}
