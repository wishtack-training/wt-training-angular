import { Component } from '@angular/core';
import { Book, Cart } from '../cart';

@Component({
  selector: 'mc-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  constructor(private _cart: Cart) {
  }

  getBookList() {
    return this._cart.getBookList();
  }

  remove(book: Book) {
    this._cart.removeBook(book);
  }
}
