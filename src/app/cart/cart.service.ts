import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { push } from '@datorama/akita';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/internal/operators/tap';
import { map } from 'rxjs/operators';
import { Book } from '../book-shared/book';
import { CartStore } from './cart.store';

@Injectable({
    providedIn: 'root'
})
export class CartService {

    constructor(
        private _cartStore: CartStore,
        private _httpClient: HttpClient
    ) {
    }

    addBook(book: Book): Observable<Book> {

        return this._httpClient
            .post<Partial<Book>>('https://api.wishtack.io/users/123/books', book)
            .pipe(
                map(data => new Book(data)),
                tap(_book => {
                    this._cartStore.setState(state => {
                        return {
                            bookList: push(state.bookList, _book)
                        };
                    });
                })
            );

    }

}
