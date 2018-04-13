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

@Injectable()
export class BookRepository {

    constructor(private _httpClient: HttpClient) {
    }

    searchBooks({keywords}): Observable<Book[]> {

        const url = `https://www.googleapis.com/books/v1/volumes?q=${keywords}`;

        return this._httpClient.get<any>(url)
            .pipe(
                map(googleBookListResponse => {

                    const bookList = googleBookListResponse.items.map(item => {

                        let pictureUrl = null;
                        const imageLinks = item.volumeInfo.imageLinks;

                        if (imageLinks != null) {
                            pictureUrl = imageLinks.thumbnail;
                        }

                        return new Book({
                            title: item.volumeInfo.title,
                            pictureUrl
                        });

                    });

                    return bookList;

                })
            );

    }

}
