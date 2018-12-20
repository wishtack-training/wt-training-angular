import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Book } from '../book-comon/book';


export interface GoogleVolumeListResponse {
    items: Array<{
        volumeInfo: {
            title: string;
        }
    }>;
}


@Injectable({
    providedIn: 'root'
})
export class BookCatalog {

    constructor(private _httpClient: HttpClient) {
    }

    search(keywords: string): Observable<Book[]> {

        return this._httpClient.get<GoogleVolumeListResponse>(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(keywords)}`)
            .pipe(
                map(response => response.items
                    .map(item => {
                        return new Book({
                            title: item.volumeInfo.title
                        });
                    }))
            );

    }

}
