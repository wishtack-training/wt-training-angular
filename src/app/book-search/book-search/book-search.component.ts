import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'wt-book-search',
    templateUrl: './book-search.component.html',
    styleUrls: ['./book-search.component.scss']
})
export class BookSearchComponent implements OnInit {

    constructor(private _httpClient: HttpClient) {
    }

    ngOnInit() {

        this._httpClient.get('https://www.googleapis.com/books/v1/volumes?q=eXtreme%20Programming')
            .subscribe(data => {
                console.log(data);
            });

    }

}
