/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */

'use strict';

import {BookStore} from '../book-store';

export class BookListComponent {

    constructor() {
        this._bookStore = new BookStore();
    }

    addBook(book) {
        this._bookStore.addBook(book);
    }

    getBookList() {
        return this._bookStore.getBookList();
    }

    removeBook(book) {
        this._bookStore.removeBook(book);
    }

}

BookListComponent.config = {
    controller: BookListComponent,
    template: require('./book-list.component.html')
};
