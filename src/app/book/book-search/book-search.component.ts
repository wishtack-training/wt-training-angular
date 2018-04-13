import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { debounceTime, filter, map, shareReplay, switchMap } from 'rxjs/operators';
import { Book } from '../book';
import { BookRepository } from '../book-repository';

const keywordsValidator = (keywordList) => (formControl: AbstractControl) => {

    if (keywordList.includes(formControl.value)) {
        return {
            forbiddenkeywords: {
                usedKeywords: formControl.value
            }
        };
    }

    return null;

};

@Component({
    selector: 'wt-book-search',
    templateUrl: './book-search.component.html',
    styleUrls: ['./book-search.component.scss']
})
export class BookSearchComponent implements OnInit {

    bookList$: Observable<Book[]>;
    bookCount$: Observable<number>;

    searchFormGroup = new FormGroup({
        keywords: new FormControl(null, [
            Validators.required,
            Validators.maxLength(10),
            keywordsValidator(['react', 'vue'])
        ]),
        author: new FormControl()
    });

    constructor(private _bookRepository: BookRepository) {
    }

    ngOnInit() {

        this.bookList$ = this.searchFormGroup.valueChanges
            .pipe(
                debounceTime(200),
                filter(value => value.keywords.length > 3),
                switchMap(value => {
                    return this._bookRepository.searchBooks({
                        keywords: value.keywords
                    });
                }),
                shareReplay(1)
            );

        this.bookCount$ = this.bookList$
            .pipe(
                map(bookList => bookList.length)
            );

    }


}
