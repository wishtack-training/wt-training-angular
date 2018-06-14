import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Book } from './book';

export interface GoogleVolumesResponse {
    items: Array<{
        id: string;
        volumeInfo: {
            title: string;
            imageLinks: {
                thumbnail: string;
            }
        }
    }>;
}

@Injectable({
    providedIn: 'root'
})
export class BookRepository {

    constructor(private _httpClient: HttpClient) {
    }

    searchBooks(keywords: string): Observable<Book[]> {

        const escapedKeywords = encodeURIComponent(keywords);

        return this._httpClient.get<GoogleVolumesResponse>(`https://www.googleapis.com/books/v1/volumes?q=${escapedKeywords}`)
            .pipe(
                map(data => data.items
                    .map(item => {

                        let pictureUrl = null;

                        if  (item.volumeInfo.imageLinks != null) {
                            pictureUrl = item.volumeInfo.imageLinks.thumbnail;
                        }

                        return new Book({
                            id: item.id,
                            title: item.volumeInfo.title,
                            pictureUrl
                        });
                    })
                )
            );

    }

}
