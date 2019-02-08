import { Injectable } from '@angular/core';
import { push } from '@datorama/akita';
import { Book } from '../book-shared/book';

@Injectable({
    providedIn: 'root'
})
export class CartService {

    private _bookList: Book[] = [];

    addBook(book: Book) {
        this._bookList = push(this._bookList, book);
    }

    getBookList() {
        return this._bookList;
    }

}
