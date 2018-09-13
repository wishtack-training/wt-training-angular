import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, filter, map, switchMap } from 'rxjs/operators';

export interface GoogleApiResponse {
    items: Array<{
        volumeInfo: {
            title: string;
            imageLinks?: {
                thumbnail: string;
            }
        }
    }>;
}

export interface Book {
    title: string;
}

@Component({
    selector: 'wt-dashboard',
    templateUrl: './book-search.component.html',
    styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent implements OnInit {

    keywordsControl = new FormControl();
    bookList$: Observable<Book[]>;

    constructor(private _httpClient: HttpClient) {
    }

    ngOnInit() {
        this.bookList$ = this.keywordsControl.valueChanges
            .pipe(
                debounceTime(100),
                filter(value => value !== ''),
                switchMap(keywords => this._httpClient
                    .get<GoogleApiResponse>(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(keywords)}`)),
                filter(data => data.items != null),
                map(data => {
                    return data.items.map(item => {
                        return {
                            title: item.volumeInfo.title
                        };
                    });
                })
            );
    }


}
