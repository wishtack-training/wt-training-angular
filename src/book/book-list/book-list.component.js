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

}

BookListComponent.config = {
    controller: BookListComponent,
    template: require('./book-list.component.html')
};
