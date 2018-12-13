import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Book } from '../book-list-container/book';


export interface BookApiListResponse<T> {
    totalItems: number;
    items?: T[];
}

export interface BookApiVolume {
    id: string;
    volumeInfo: {
        authors: string[];
        imageLinks: {
            thumbnail: string;
        },
        title: string;
    };
}

export type BookApiVolumeListResponse = BookApiListResponse<BookApiVolume>;

@Injectable({
    providedIn: 'root'
})
export class BookCatalog {

    constructor(private _httpClient: HttpClient) {
    }

    search(keywords: string): Observable<Book[]> {

        if (keywords == null || keywords.length === 0) {
            return of([]);
        }

        const query = encodeURIComponent(keywords);
        const url = `https://www.googleapis.com/books/v1/volumes?q=${query}`;

        return this._httpClient.get<BookApiVolumeListResponse>(url)
            .pipe(
                map(response => {
                    return response.items.map(item => {
                        return this._itemToBook(item);
                    });
                }),
            );

    }

    private _itemToBook(item: BookApiVolume) {

        const {authors, imageLinks} = item.volumeInfo;
        const authorName = authors ? authors[0] : null;
        const pictureUri = imageLinks ? imageLinks.thumbnail : null;

        return new Book({
            id: item.id,
            authorName,
            pictureUri,
            title: item.volumeInfo.title
        });
    }
}
