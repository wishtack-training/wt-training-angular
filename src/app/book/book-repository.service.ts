import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Book } from './book';

export interface GoogleVolumesApiResponse {
    totalItems: number;
    items: Array<{
        volumeInfo: {
            title: string;
        }
    }>;
}

export interface ListResponse<T> {
    itemList: T[];
    totalCount: number;
    nextCursor?: string;
}

@Injectable({
    providedIn: 'root'
})
export class BookRepository {

    constructor(
        private _httpClient: HttpClient
    ) {
    }

    searchBooks(bookTitle: string): Observable<ListResponse<Book>> {

        const url = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(bookTitle)}`;

        return this._httpClient.get<GoogleVolumesApiResponse>(url)
            .pipe(
                map(data => {

                    const itemList = data.items.map(volumeItem => {
                        return new Book({
                            title: volumeItem.volumeInfo.title
                        });
                    });

                    return {
                        itemList: itemList,
                        totalCount: data.totalItems
                    };

                })
            );

    }

}
