import { Component, OnInit } from '@angular/core';
import { Book, Cart } from './cart';

@Component({
  selector: 'ag-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private _cart: Cart) {
  }

  ngOnInit(): void {
  }

  getBookList() {
    return this._cart.getBookList();
  }

  remove(book: Book) {
    this._cart.removeBook(book);
  }
}
