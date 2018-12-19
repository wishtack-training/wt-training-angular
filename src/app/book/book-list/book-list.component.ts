import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../book';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'wt-book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.scss']
})
export class BookListComponent {

    @Input() bookList: Book[];
    @Output() bookRemove = new EventEmitter<Book>();

    removeBook(book: Book) {
        this.bookRemove.emit(book);
    }

}
