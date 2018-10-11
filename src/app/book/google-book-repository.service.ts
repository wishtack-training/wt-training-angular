import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Book } from './book';


export interface GoogleBookItem {
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

    constructor(private _httpClient: HttpClient) {
    }

    searchBooks(keywords: string) {

        const url = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(keywords)}`;

        return this._httpClient.get<GoogleBookVolumesResponse>(url)
            .pipe(
                map(data => {

                    return data.items
                        .map(item => {

                            const listPrice = item.saleInfo.listPrice;
                            const imageLinks = item.volumeInfo.imageLinks;
                            const pictureUrl = imageLinks ? imageLinks.thumbnail : null;
                            const price = listPrice ? listPrice.amount : null;

                            return new Book({
                                author: {
                                    name: item.volumeInfo.authors ? item.volumeInfo.authors[0] : null,
                                },
                                price,
                                pictureUrl,
                                title: item.volumeInfo.title
                            });
                        });

                })
            );

    }

}
