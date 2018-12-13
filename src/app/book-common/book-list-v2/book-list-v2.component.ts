import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../../book-list-container/book';

@Component({
    selector: 'wt-book-list-v2',
    templateUrl: './book-list-v2.component.html',
    styleUrls: ['./book-list-v2.component.scss']
})
export class BookListV2Component implements OnInit {

    @Input() bookList: Book[];
    @Input() canBuy = false;
    @Input() canRemove = false;
    @Output() bookBuy = new EventEmitter<Book>();
    @Output() bookRemove = new EventEmitter<Book>();

    constructor() {
    }

    ngOnInit() {
    }

    buy(book: Book) {
        this.bookBuy.emit(book);
    }

    remove(book: Book) {
        this.bookRemove.emit(book);
    }

}
