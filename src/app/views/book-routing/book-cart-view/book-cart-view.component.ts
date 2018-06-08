import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { BookCart } from '../../../book-cart/book-cart';
import { Book } from '../../../book/book';

@Component({
    selector: 'wt-book-cart-view',
    templateUrl: './book-cart-view.component.html',
    styleUrls: ['./book-cart-view.component.css']
})
export class BookCartViewComponent {

    bookList$: Observable<Book[]>;

    constructor(private _bookCart: BookCart) {
        this.bookList$ = this._bookCart.bookList$;
    }


}
