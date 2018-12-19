import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../book';

@Component({
    selector: 'wt-book-preview',
    templateUrl: './book-preview.component.html',
    styleUrls: ['./book-preview.component.scss']
})
export class BookPreviewComponent {

    @Input() book: Book;
    @Output() bookRemove = new EventEmitter<void>();

    removeBook() {
        this.bookRemove.emit();
    }

    getPictureUri() {
        const authorName = encodeURIComponent(this.book.authorName);
        return `https://robohash.org/${authorName}?set=set4`;
    }
}
