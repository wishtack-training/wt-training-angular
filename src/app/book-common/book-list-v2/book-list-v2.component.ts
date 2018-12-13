import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../../book-list-container/book';

@Component({
    selector: 'wt-book-list-v2',
    templateUrl: './book-list-v2.component.html',
    styleUrls: ['./book-list-v2.component.scss']
})
export class BookListV2Component implements OnInit {

    @Input() editedBook: Book;
    @Input() bookList: Book[];
    @Output() bookEdit = new EventEmitter<Book>();
    @Output() bookSubmit = new EventEmitter<Book>();
    @Output() bookRemove = new EventEmitter<Book>();

    constructor() {
    }

    ngOnInit() {
    }

}
