import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Book } from '../book';

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

    bookList: Book[];
    searchFormGroup = new FormGroup({
        keywords: new FormControl(null, [
            Validators.required,
            Validators.maxLength(10),
            keywordsValidator(['react', 'vue'])
        ]),
        author: new FormControl()
    });

    constructor() {
    }

    ngOnInit() {
        this.bookList = [
            new Book({
                title: 'eXtreme Programming explained'
            }),
            new Book({
                title: 'Rework'
            })
        ];
    }

    searchBook() {
        console.log(this.searchFormGroup.valid);
        console.log(this.searchFormGroup.value);
        this.searchFormGroup.reset();
    }

}
