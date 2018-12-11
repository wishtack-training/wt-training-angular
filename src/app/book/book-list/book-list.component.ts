import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../book';

@Component({
    selector: 'wt-book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.scss']
})
export class BookListComponent {

    @Input() bookList: Book[];
    @Output() bookRemove = new EventEmitter<Book>();
    @Output() bookEdit = new EventEmitter<Book>();

    editBook(book: Book) {
        this.bookEdit.emit(book);
    }

    removeBook(book: Book) {
        this.bookRemove.emit(book);
    }

}
