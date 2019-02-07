import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { get } from '@wishtack/get';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Book } from '../book-shared/book';

export interface GoogleVolume {
    id: string;
    saleInfo: {
        listPrice?: {
            amount: number;
            currencyCode: string;
        };
    };
    volumeInfo: {
        authors?: string[];
        title: string;
        imageLinks?: {
            thumbnail: string;
        }
    };
}

export interface GoogleListResponse<T> {
    totalItems: number;
    items: T[];
}

export type GoogleVolumeList = GoogleListResponse<GoogleVolume>;

@Injectable({
    providedIn: 'root'
})
export class BookSearchService {

    constructor(private _httpClient: HttpClient) {
    }

    searchBooks(keywords: string): Observable<Book[]> {

        const encodedKeywords = encodeURIComponent(keywords);

        return this._httpClient
            .get<GoogleVolumeList>(`https://www.googleapis.com/books/v1/volumes?q=${encodedKeywords}`)
            .pipe(
                map(response => {

                    return response.items.map(item => {

                        const {authors = [], title} = item.volumeInfo;
                        const [author] = authors;

                        return new Book({
                            author,
                            title,
                            pictureUri: get(item.volumeInfo, 'imageLinks', 'thumbnail')
                        });

                    });

                })
            );

    }

}

