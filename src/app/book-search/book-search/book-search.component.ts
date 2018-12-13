import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, onErrorResumeNext, switchMap } from 'rxjs/operators';
import { Book } from '../../book-list-container/book';
import { BookCatalog } from '../book-catalog.service';

@Component({
    selector: 'wt-book-search',
    templateUrl: './book-search.component.html',
    styleUrls: ['./book-search.component.scss']
})
export class BookSearchComponent implements OnInit {

    keywordsControl = new FormControl();
    keywords$: Observable<string>;
    bookList: Book[];

    constructor(private _bookCatalog: BookCatalog) {
        this.keywords$ = this.keywordsControl.valueChanges;
    }

    ngOnInit() {

        this.keywords$
            .pipe(
                debounceTime(100),
                switchMap(keywords => {
                    return this._bookCatalog.search(keywords)
                        .pipe(
                            onErrorResumeNext()
                        );
                })
            )
            .subscribe(data => {

                console.log(data);

            });
    }

}
