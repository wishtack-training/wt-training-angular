import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Scavenger } from '@wishtack/rx-scavenger';
import { debounceTime, distinctUntilChanged, publishReplay, refCount, switchMap } from 'rxjs/operators';
import { Cart } from '../../cart/cart.service';
import { Book } from '../book';
import { BookRepository } from '../book-repository.service';

@Component({
    selector: 'wt-book-search',
    templateUrl: './book-search.component.html',
    styleUrls: ['./book-search.component.scss']
})
export class BookSearchComponent implements OnDestroy, OnInit {

    bookList: Book[];

    keywordsControl = new FormControl();

    private _scavenger = new Scavenger(this);

    constructor(
        private _bookRepository: BookRepository,
        private _cart: Cart
    ) {
    }

    ngOnInit() {

        this.keywordsControl.valueChanges
            .pipe(
                debounceTime(100),
                distinctUntilChanged(),
                switchMap(keywords => {
                    return this._bookRepository.searchBooks(keywords);
                }),
                publishReplay(1), refCount(),
                this._scavenger.collect()
            )
            .subscribe(bookList => this.bookList = bookList);

        this._cart.onBookAdd$
            .subscribe(() => console.log('Book Added'));

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
