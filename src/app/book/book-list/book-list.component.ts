import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cart } from '../../cart/cart.service';
import { Book } from '../book';


@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'wt-book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

    @Input() bookList: Book[];
    @Input() canAddToCart = true;
    @Input() canRemove = true;
    @Output() bookRemove = new EventEmitter<Book>();

    constructor(private _cart: Cart) {
    }

    addToCart(book: Book) {
        this._cart.addBook(book);
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
