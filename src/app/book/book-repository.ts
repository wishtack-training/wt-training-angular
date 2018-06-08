/**
 *
 * (c) 2013-2018 Wishtack
 *
 * $Id: $
 */

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Book } from './book';
import { GoogleBookSearchResponse } from './book-list/book-search.component';

@Injectable({
    providedIn: 'root'
})
export class BookRepository {

    constructor(private _httpClient: HttpClient) {
    }

    searchBooks(keywords: string): Observable<Book[]> {

        const encodedKeywords = encodeURIComponent(keywords);

        const url = `https://www.googleapis.com/books/v1/volumes?q=${encodedKeywords}`;

        return this._httpClient.get<GoogleBookSearchResponse>(url)
            .pipe(
                map(data => {
                    return data.items.map(item => this._googleItemToBook(item));
                })
            );

    }

    getBook(bookId: string): Observable<Book> {

        const url = `https://www.googleapis.com/books/v1/volumes/${encodeURIComponent(bookId)}`;
        return this._httpClient.get<GoogleBookSearchResponse>(url)
            .pipe(
                map(item => this._googleItemToBook(item))
            );

    }

    private _googleItemToBook(item) {

        const imageLinks = item.volumeInfo.imageLinks;

        const pictureUrl = imageLinks != null ? imageLinks.thumbnail : null;

        return new Book({
            id: item.id,
            title: item.volumeInfo.title,
            pictureUrl
        });
    }
}
