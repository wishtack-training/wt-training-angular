import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cart } from '../../cart/cart.service';
import { Book } from '../book';
import { BookCollectionComponent } from '../book-collection-component';

@Component({
    selector: 'wt-book-grid',
    templateUrl: './book-grid.component.html',
    styleUrls: ['./book-grid.component.scss'],
})
export class BookGridComponent implements BookCollectionComponent {

    @Input() bookList: Book[];
    @Input() canAddToCart = true;
    @Input() canRemove = true;
    @Output() bookRemove = new EventEmitter<Book>();

    constructor(private _cart: Cart) {
    }

    addToCart(book: Book) {
        this._cart.addBook(book);
    }

    removeBook(book: Book) {
        this.bookRemove.emit(book);
    }

}
