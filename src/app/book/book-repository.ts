/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */

import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable({
    providedIn: 'root'
})
export class BookRepository {

    private _bookList: Book[];

    constructor() {
        this._bookList = [
            new Book({
                title: 'eXtreme Programming Explained',
                pictureUrl: 'https://robohash.org/a'
            }),
            new Book({
                title: 'ReWork',
                pictureUrl: 'https://robohash.org/b'
            })
        ];
    }

    getBookList() {
        return this._bookList;
    }

}