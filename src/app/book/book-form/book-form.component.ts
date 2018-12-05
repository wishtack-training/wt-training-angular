import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'wt-book-form',
    templateUrl: './book-form.component.html',
    styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {

    bookForm = new FormGroup({
        title: new FormControl()
    });

    constructor() {
    }

    ngOnInit() {
    }

}
