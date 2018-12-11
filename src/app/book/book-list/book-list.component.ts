import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../book';

@Component({
    selector: 'wt-book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

    @Input() bookList: Book[];
    @Output() bookRemove = new EventEmitter<Book>();

    constructor() {
    }

    ngOnInit() {
    }

}
