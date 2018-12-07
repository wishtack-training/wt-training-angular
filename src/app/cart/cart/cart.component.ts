import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Book } from '../../book/book';
import { Cart } from '../cart.service';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'wt-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss']
})
export class CartComponent {

    cartPictureUri = require('./cart.png');

    bookCount$ = this._cart.bookCount$;
    bookList$ = this._cart.bookList$;

    constructor(private _cart: Cart) {
    }

    resetCart() {
        this._cart.reset();
    }

    onBookRemove(book: Book) {
        this._cart.removeBook(book);
    }

}
