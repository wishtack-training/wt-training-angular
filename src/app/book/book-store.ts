import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable({
    providedIn: 'root'
})
export class BookStore {

    private _bookList: Book[] = [];

    getBookList() {
        return this._bookList;
    }

    addBook(book: Book) {
        this._bookList = [...this._bookList, book];
    }

    removeBook(book: Book) {

        const index = this._bookList.indexOf(book);

        this._bookList.splice(index, 1);

        // this._bookList = this._bookList.filter(_book => book !== _book);
    }

}
