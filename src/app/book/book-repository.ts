/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

import { Book } from './book';
import { GoogleBook, GoogleBookListResponse } from './google-book-list-response';

@Injectable()
export class BookRepository {

    constructor(private _httpClient: HttpClient) {
    }

    searchBookList(title: string): Observable<Book[]> {

        const url = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(title)}`;

        return this._httpClient.get<GoogleBookListResponse>(url)
            .pipe(
                map(googleBookListResponse => {

                    const bookList = googleBookListResponse.items
                        .map(googleBook => this._googleBookItemToBook(googleBook));

                    return bookList;

                })
            );


    }

    private _googleBookItemToBook(googleBook: GoogleBook) {
        /* `imageLinks` is sometimes missing so we replace it with this default object. */
        const defaultImageLinks = {
            thumbnail: null
        };
        const {id, volumeInfo} = googleBook;
        const {title, imageLinks = defaultImageLinks} = volumeInfo;

        const pictureUrl = imageLinks.thumbnail;

        return new Book({
            id,
            title,
            pictureUrl
        });
    }
}
