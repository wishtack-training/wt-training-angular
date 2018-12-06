import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
    selector: 'wt-book-search',
    templateUrl: './book-search.component.html',
    styleUrls: ['./book-search.component.scss']
})
export class BookSearchComponent implements OnDestroy, OnInit {

    constructor() {
    }

    ngOnInit() {

    }

    ngOnDestroy() {
    }

    // Playing with observables
    // ngOnInit() {
    //
    //     interval(100)
    //         .pipe(
    //             map(data => data * 2 % 10),
    //             bufferCount(3, 1)
    //         )
    //         .subscribe(data => {
    //             console.log(data);
    //         });
    //
    //
    //     const data$ = this._httpClient.get<GoogleVolumesApiResponse>('https://www.googleapis.com/books/v1/volumes?q=eXtreme%20Programming');
    //
    //     this._subscription = data$
    //         .subscribe(data => data);
    //
    // }

    // Promise.then
    // ngOnInit() {
    //
    //     const promise = this._httpClient.get('https://www.googleapis.com/books/v1/volumes?q=eXtreme%20Programming')
    //         .toPromise();
    //
    //     promise.then(data => {
    //         console.log(data);
    //     });
    //
    // }

    // async / await
    // async ngOnInit() {
    //
    //     const data = await this._httpClient.get('https://www.googleapis.com/books/v1/volumes?q=eXtreme%20Programming')
    //         .toPromise();
    //
    //     console.log(data);
    //
    // }

}
