import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Book } from './book';

// interface ApiListResponse<T> {
//     meta: {
//         totalCount?: number;
//     };
//     data: T[];
// }
// Return type could be Observable<ApiListResponse<Book>>

export interface GoogleVolumeListApiResponse {
    items?: Array<{
        id?: string;
        volumeInfo?: {
            title?: string;
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

        if (keywords == null || keywords.length === 0) {
            return of([]);
        }

        const url = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(keywords)}`;

        return this._httpClient.get<GoogleVolumeListApiResponse>(url)
            .pipe(
                map(response => {
                    return response.items.map(item => {
                        return new Book({
                            id: item.id,
                            title: item.volumeInfo.title
                        });
                    });
                })
            );

    }

}
