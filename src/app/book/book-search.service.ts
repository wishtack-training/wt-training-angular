import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { get } from '@wishtack/get';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Book } from './book';
import { GoogleVolumeList } from './google-volume-list';

@Injectable({
    providedIn: 'root'
})
export class BookSearchService {

    constructor(private _httpClient: HttpClient) {
    }

    search(keywords: string): Observable<Book[]> {

        const encodedKeywords = encodeURIComponent(keywords);

        return this._httpClient
            .get<GoogleVolumeList>(`https://www.googleapis.com/books/v1/volumes?hl=en&q=${encodedKeywords}`)
            .pipe(
                map(data => data.items.map(item => {

                        const {authors, id, title} = item.volumeInfo;
                        const [author] = authors;
                        const price = get(item.saleInfo, 'retailPrice', 'amount');
                        const pictureUri = get(item.volumeInfo, 'imageLinks', 'smallThumbnail');

                        return new Book({
                            id,
                            author,
                            title,
                            pictureUri,
                            price
                        });

                    })
                )
            );

    }

}
