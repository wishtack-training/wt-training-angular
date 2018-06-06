/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */

import { Book } from '../book/book';

export class BookCart {

    private _bookList: Book[] = [];

    addBook(book: Book) {
        this._bookList = [...this._bookList, book];
    }

    getBookList(): Book[] {
        return this._bookList;
    }

    removeBook(book: Book) {
        this._bookList = this._bookList
            .filter(_book => _book !== book);
    }
}
