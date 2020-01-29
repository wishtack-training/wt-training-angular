import { Component } from '@angular/core';
import { Cart, createBook } from '../cart';

@Component({
  selector: 'mc-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  constructor(private _cart: Cart) {
    this._cart.addBook(createBook({
      title: 'eXtreme Programming Explained',
      price: 20
    }));
    this._cart.addBook(createBook({
      title: 'Rework',
      price: 30
    }));
  }

  getBookList() {
    return this._cart.getBookList();
  }

  addBook() {
    this._cart.addBook(createBook({
      title: 'test',
      price: 123
    }));
  }
}
