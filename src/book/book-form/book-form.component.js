/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */

'use strict';

import {Book} from '../book';

require('./book-form.component.scss');

export class BookFormComponent {

    constructor() {
        this.bookForm = null;
        this.tmpBook = new Book();
    }

    submitBook() {

        this.onBookSubmit({
            book: this.tmpBook
        });

        /* Reset the form. */
        this.tmpBook = new Book();

        /* Reset form's pristine state as if we never touched it. */
        this.bookForm.$setPristine();

    }

}

BookFormComponent.config = {
    bindings: {
        onBookSubmit: '&'
    },
    controller: BookFormComponent,
    template: require('./book-form.component.html')
};
