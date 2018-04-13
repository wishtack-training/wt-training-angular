import { Component, OnInit } from '@angular/core';
import { Book } from '../book';

@Component({
    selector: 'wt-book-search',
    templateUrl: './book-search.component.html',
    styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent implements OnInit {

    bookList: Book[];

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

}
