import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../book-list-container/book';
import { CartStore } from './cart.store';

@Injectable({providedIn: 'root'})
export class CartService {

    constructor(private _cartStore: CartStore,
                private _httpClient: HttpClient) {
    }

    addBook(book: Book) {

        this._cartStore.update(cart => {
            const bookList = [...cart.bookList, book];
            return {
                bookList
            };
        });

    }

}
