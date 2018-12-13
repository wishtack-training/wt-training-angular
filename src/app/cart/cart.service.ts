import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../book-list-container/book';

export interface Cart {
    bookList: Book[];
}

@Injectable({
    providedIn: 'root'
})
export class CartService {

    bookList$: Observable<Book[]>;
    totalPrice$: Observable<number>;

    addBook(book: Book) {
        throw new Error('😱 Not implemented yet!');
    }

    removeBook(bookId: string) {
        throw new Error('😱 Not implemented yet!');
    }

}
