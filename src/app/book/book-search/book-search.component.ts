import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { get } from '@wishtack/get';
import { Book } from '../book';
import { GoogleVolumeList } from '../google-volume-list';

@Component({
    selector: 'wt-book-search',
    templateUrl: './book-search.component.html',
    styleUrls: ['./book-search.component.scss']
})
export class BookSearchComponent implements OnInit {

    keywordsControl = new FormControl();
    bookList: Book[];

    constructor(
        private _httpClient: HttpClient
    ) {

    }

    ngOnInit() {
        this.keywordsControl.valueChanges
            .subscribe(keywords => {
                console.log(keywords);
            });

        this.search('eXtreme Programming');

    }

    search(keywords: string) {

        const encodedKeywords = encodeURIComponent(keywords);

        this._httpClient
            .get<GoogleVolumeList>(`https://www.googleapis.com/books/v1/volumes?hl=en&q=${encodedKeywords}`)
            .subscribe(data => {

                this.bookList = data.items.map(item => {

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

                });

            });

    }

}
