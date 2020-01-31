import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from './cart';
import { CartStore } from './cart.store';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(private _cartStore: CartStore) {}

  addBook(book: Book) {
    this._cartStore.update(state => {
      return {
        ...state,
        books: [...state.books, book]
      };
    });
  }

  removeBook(book: Book) {
    this._cartStore.update(state => {
      return {
        ...state,
        books: state.books.filter(_book => book === book)
      };
    });
  }

}
