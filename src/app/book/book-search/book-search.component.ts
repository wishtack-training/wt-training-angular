import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { interval } from 'rxjs';
import { bufferTime, filter, retry, take } from 'rxjs/operators';
import { Book } from '../book';

@Component({
    selector: 'wt-book-search',
    templateUrl: './book-search.component.html',
    styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent implements OnInit {

    bookList: Book[];
    bookKeywordsControl = new FormControl();

    constructor(private _httpClient: HttpClient) {
    }

    async ngOnInit() {

        const data$ = interval(100)
            .pipe(
                filter(value => {

                    if (value === 11) {
                        throw new Error('DOH');
                    }

                    return value;
                }),
                bufferTime(1000),
                take(3),
                retry(3)
            );

        data$
            .subscribe({
                next: data => console.log(data),
                error: err => console.error('ERROR'),
                complete: () => console.log('DONE!')
            });

        this.bookKeywordsControl.valueChanges
            .subscribe(value => {
                console.log(value);
            });

        this._httpClient.get('https://www.googleapis.com/books/v1/volumes?q=eXtreme Programming')
            .subscribe(data => {
                console.log(data);
            });

    }

}
