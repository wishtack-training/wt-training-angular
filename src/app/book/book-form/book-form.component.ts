import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Book } from '../book';

@Component({
    selector: 'wt-book-form',
    templateUrl: './book-form.component.html',
    styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {

    @Output() bookSubmit = new EventEmitter<Book>();

    constructor() {
    }

    ngOnInit() {
    }

}
