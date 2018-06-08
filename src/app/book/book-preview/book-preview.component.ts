import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { BookCart } from '../../book-cart/book-cart';
import { Book } from '../book';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'wt-book-preview',
    templateUrl: './book-preview.component.html',
    styleUrls: ['./book-preview.component.scss']
})
export class BookPreviewComponent implements OnChanges {

    @Input() book: Book;
    price: number;

    constructor(private _bookCart: BookCart) {
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes.book != null) {
            this.price = this.book.title.length * 5;
        }
    }

    buy() {
        this._bookCart.addBook(this.book);
    }

}
