import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../book';

@Component({
    selector: 'wt-book-preview',
    templateUrl: './book-preview.component.html',
    styleUrls: ['./book-preview.component.css']
})
export class BookPreviewComponent implements OnInit {

    @Input() book: Book;

    constructor() {
    }

    ngOnInit() {
    }

}
