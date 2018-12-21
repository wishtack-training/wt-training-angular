import { Component } from '@angular/core';
import { Book } from '../../book-comon/book';
import { CartQuery } from '../cart.query';
import { CartService } from '../cart.service';

@Component({
    selector: 'wt-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss']
})
export class CartComponent {

    bookList$ = this._cartQuery.bookList$;

    constructor(
        private _cart: CartService,
        private _cartQuery: CartQuery
    ) {
    }

    removeBook(book: Book) {
        this._cart.removeBook(book);
    }

}
