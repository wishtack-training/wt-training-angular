import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable({
    providedIn: 'root'
})
export class BookStore {

    private _bookList: Book[] = [];

    getBookList(): Book[] {
        return this._bookList;
    }

    addBook(book: Book) {
        this._bookList = [...this._bookList, book];
    }

    removeBook(book: Book) {
        this._bookList = this._bookList
            .filter(_book => _book !== book);
    }

    replaceBook(selectedBook: Book, newBook: Book) {

        this._bookList = this._bookList
            .map(book => {

                if (book === selectedBook) {
                    return newBook;
                }

                return book;
            });

    }

}
