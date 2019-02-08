import { Component, Input } from '@angular/core';
import { Book } from '../book';

@Component({
    selector: 'wt-book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.scss']
})
export class BookListComponent {

    @Input() bookList: Book[];

}
