import { Component } from '@angular/core';
import { Book } from '../../book/book';
import { CartService } from '../cart.service';

@Component({
    selector: 'wt-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss']
})
export class CartComponent {

    constructor(private _cart: CartService) {
    }

    getBookList() {
        return this._cart.getBookList();
    }

    removeBook(book: Book) {
        this._cart.removeBook(book);
    }
}
