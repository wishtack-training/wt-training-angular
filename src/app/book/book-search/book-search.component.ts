import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { debounceTime, switchMap } from 'rxjs/operators';
import { Subscription } from 'rxjs/Subscription';
import { Book } from '../book';
import { BookRepository } from '../book-repository';


@Component({
    selector: 'wt-book-search',
    templateUrl: './book-search.component.html',
    styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent implements OnInit {

    bookFormGroup = new FormGroup({
        title: new FormControl()
    });
    bookList$: Observable<Book[]>;

    constructor(private _bookRepository: BookRepository) {
    }

    ngOnInit() {

        this.bookList$ = this.bookFormGroup.valueChanges
            .pipe(
                debounceTime(200),
                switchMap(value => {
                    const title = value.title;
                    return this._bookRepository.searchBookList(title);
                })
            );

    }

}
