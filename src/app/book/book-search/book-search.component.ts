import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Book } from '../book';
import { GoogleBookListResponse } from '../google-book-list-response';


@Component({
    selector: 'wt-book-search',
    templateUrl: './book-search.component.html',
    styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent implements OnInit {

    bookFormGroup = new FormGroup({
        title: new FormControl()
    });
    bookList: Book[];

    constructor(private _httpClient: HttpClient) {
    }

    ngOnInit() {
    }

    searchBook() {
        const bookTitle = this.bookFormGroup.value.title;

        const url = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(bookTitle)}`;

        const bookListResponse$ = this._httpClient.get<GoogleBookListResponse>(url);

        bookListResponse$
            .subscribe(bookListResponse => {

                this.bookList = bookListResponse.items.map(item => {

                    /* `imageLinks` is sometimes missing so we replace it with this default object. */
                    const defaultImageLinks = {
                        thumbnail: null
                    };
                    const { id, volumeInfo } = item;
                    const { title, imageLinks = defaultImageLinks } = volumeInfo;

                    const pictureUrl = imageLinks.thumbnail;

                    console.log(title);

                    return new Book({
                        id,
                        title,
                        pictureUrl
                    });

                });

            });


    }

}
