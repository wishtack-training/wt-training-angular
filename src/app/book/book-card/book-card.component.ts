import { Component, Input } from '@angular/core';
import { Book } from '../book';

@Component({
    selector: 'wt-book-card',
    templateUrl: './book-card.component.html',
    styleUrls: ['./book-card.component.scss']
})
export class BookCardComponent {

    @Input() book: Book;

}
