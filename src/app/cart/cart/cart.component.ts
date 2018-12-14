import { Component } from '@angular/core';
import { CartQuery } from '../cart.query';

@Component({
    selector: 'wt-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss']
})
export class CartComponent {

    bookList$ = this._cartQuery.bookList$;

    constructor(private _cartQuery: CartQuery) {
    }

}
