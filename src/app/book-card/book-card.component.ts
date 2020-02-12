import { Component, Input } from '@angular/core';
import { Book } from '../cart/cart';

@Component({
  selector: 'ag-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent {

  @Input() book: Book;

}
