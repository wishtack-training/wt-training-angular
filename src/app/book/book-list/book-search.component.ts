import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Scavenger } from '@wishtack/rx-scavenger';
import { Book } from '../book';

export interface GoogleBookSearchResponse {
    items: Array<{
        volumeInfo: {
            title: string;
            imageLinks: {
                thumbnail: string;
            }
        }
    }>;
}

@Component({
    selector: 'wt-book-search',
    templateUrl: './book-search.component.html',
    styleUrls: ['./book-search.component.scss']
})
export class BookSearchComponent implements OnDestroy, OnInit {

    bookList: Book[];

    private _bookSearchUrl = 'https://www.googleapis.com/books/v1/volumes?q=extreme%20programming';
    private _scavenger = new Scavenger(this);

    constructor(private _httpClient: HttpClient) {
    }

    ngOnInit() {

        this._httpClient.get<GoogleBookSearchResponse>(this._bookSearchUrl)
            .pipe(
                this._scavenger.collect()
            )
            .subscribe(data => {
                this.bookList = data.items.map(item => this._googleItemToBook(item));
            });

    }

    ngOnDestroy() {
    }

    private _googleItemToBook(item) {

        const imageLinks = item.volumeInfo.imageLinks;

        const pictureUrl = imageLinks != null ? imageLinks.thumbnail : null;

        return new Book({
            title: item.volumeInfo.title,
            pictureUrl
        });
    }

}
