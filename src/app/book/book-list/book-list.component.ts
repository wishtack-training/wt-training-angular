import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../book';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'wt-book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

    @Input() bookList: Book[];
    @Input() canRemove = true;
    @Output() bookRemove = new EventEmitter<Book>();

    constructor() {
    }

    ngOnInit() {
    }

    removeBook(book: Book) {
        this.bookRemove.emit(book);
    }

    getBookList() {
        return this.bookList;
    }

}
