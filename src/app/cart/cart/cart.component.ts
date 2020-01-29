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
      pictureUri: 'https://images-na.ssl-images-amazon.com/images/I/416Y8MS65TL._SX258_BO1,204,203,200_.jpg',
      price: 20
    }));
    this._cart.addBook(createBook({
      title: 'Rework',
      pictureUri: 'https://images-na.ssl-images-amazon.com/images/I/71SqvmjaM3L.jpg',
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
