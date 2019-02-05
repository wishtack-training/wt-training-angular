import { Component } from '@angular/core';
import { Book } from '../book';
import { Cart } from '../cart';

@Component({
    selector: 'wt-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss']
})
export class CartComponent {

    private _cart = new Cart();

    addBook() {
        const title = prompt('Please enter a title.');
        this._cart.addBook(new Book({
            title,
            price: 90.01
        }));
    }

    getBookList() {
        return this._cart.getBookList();
    }

    removeBook(book: Book) {
        this._cart.removeBook(book);
    }

}
