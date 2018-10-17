/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */

'use strict';

export class BookListComponent {

    constructor(bookStore) {
        this._bookStore = bookStore;
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

BookListComponent.$inject = [
    'bookStore'
];

BookListComponent.config = {
    controller: BookListComponent,
    template: require('./book-list.component.html')
};
