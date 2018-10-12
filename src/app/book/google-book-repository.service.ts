import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Book } from './book';


export interface GoogleBookItem {
    id: string;
    saleInfo: {
        listPrice: {
            amount: number
        }
    };
    volumeInfo: {
        authors: string[];
        imageLinks: {
            thumbnail: string;
        };
        title: string;
    };
}

export interface GoogleBookVolumesResponse {
    items: GoogleBookItem[];
}

@Injectable({
    providedIn: 'root'
})
export class GoogleBookRepository {

    private readonly _baseUrl = 'https://www.googleapis.com/books/v1/volumes';

    constructor(private _httpClient: HttpClient) {
    }

    searchBooks(keywords: string) {

        const url = `${this._baseUrl}?q=${encodeURIComponent(keywords)}`;

        return this._httpClient.get<GoogleBookVolumesResponse>(url)
            .pipe(
                map(data => {

                    return data.items
                        .map(item => {
                            return this._googleBookItemToBook(item);
                        });

                })
            );

    }

    getBook(bookId: string): Observable<Book> {

        const url = `${this._baseUrl}/${encodeURIComponent(bookId)}`;

        return this._httpClient.get<GoogleBookItem>(url)
            .pipe(
                map(item => this._googleBookItemToBook(item))
            );

    }

    private _googleBookItemToBook(item: GoogleBookItem) {

        const listPrice = item.saleInfo.listPrice;
        const imageLinks = item.volumeInfo.imageLinks;
        const pictureUrl = imageLinks ? imageLinks.thumbnail : null;
        const price = listPrice ? listPrice.amount : null;

        return new Book({
            id: item.id,
            author: {
                name: item.volumeInfo.authors ? item.volumeInfo.authors[0] : null,
            },
            price,
            pictureUrl,
            title: item.volumeInfo.title
        });

    }

}
