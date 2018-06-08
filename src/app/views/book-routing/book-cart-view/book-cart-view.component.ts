import { Component, OnInit } from '@angular/core';
import { BookCart } from '../../../book-cart/book-cart';

@Component({
    selector: 'wt-book-cart-view',
    templateUrl: './book-cart-view.component.html',
    styleUrls: ['./book-cart-view.component.css']
})
export class BookCartViewComponent implements OnInit {

    constructor(private _bookCart: BookCart) {
    }

    ngOnInit() {
    }

    getBookList() {
        /* @TODO: Use behavior subject or ngrx or ngxs. */
        return this._bookCart.getBookList();
    }

}
