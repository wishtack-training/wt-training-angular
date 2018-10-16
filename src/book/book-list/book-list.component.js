/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */

'use strict';

import {BookStore} from '../book-store';
import {Book} from '../book';

export class BookListComponent {

    constructor() {
        this.bookForm = null;
        this.tmpBook = new Book();
        this._bookStore = new BookStore();
    }

    addBook() {

        this._bookStore.addBook(this.tmpBook);

        /* Rest the form. */
        this.tmpBook = new Book();

        /* Reset form's pristine state as if we never touched it. */
        this.bookForm.$setPristine();

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
