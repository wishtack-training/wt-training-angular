import { Component } from '@angular/core';
import { Book } from '../../book/book';
import { Cart } from '../cart';

@Component({
    selector: 'wt-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss']
})
export class CartComponent {

    constructor(private _cart: Cart) {
    }

    addBook(book: Book) {
        this._cart.addBook(book);
    }

    getBookList() {
        return this._cart.getBookList();
    }

    removeBook(book: Book) {
        this._cart.removeBook(book);
    }
}
