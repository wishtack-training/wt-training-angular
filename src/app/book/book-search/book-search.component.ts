import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { Subscription } from 'rxjs/Subscription';
import { Book } from '../book';
import { BookRepository } from '../book-repository';


@Component({
    selector: 'wt-book-search',
    templateUrl: './book-search.component.html',
    styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent implements OnDestroy, OnInit {

    bookFormGroup = new FormGroup({
        title: new FormControl()
    });
    bookList: Book[];

    private _searchSubscription: Subscription;

    constructor(private _bookRepository: BookRepository) {
    }

    ngOnInit() {

        this.bookFormGroup.valueChanges
            .pipe(
                debounceTime(200)
            )
            .subscribe(value => {

                this.searchBook();

            });

    }

    ngOnDestroy() {

        if (this._searchSubscription != null) {
            this._searchSubscription.unsubscribe();
        }

    }

    searchBook() {

        const title = this.bookFormGroup.value.title;

        if (this._searchSubscription != null) {
            this._searchSubscription.unsubscribe();
        }

        this._searchSubscription = this._bookRepository.searchBookList(title)
            .subscribe(bookList => this.bookList = bookList);

    }

}
