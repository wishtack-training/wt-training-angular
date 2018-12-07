import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cart } from '../../cart/cart.service';
import { Book } from '../book';
import { BookCollectionComponent } from '../book-collection-component';


@Component({
    selector: 'wt-book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements BookCollectionComponent {

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

    getBookList() {
        return this.bookList;
    }

}
